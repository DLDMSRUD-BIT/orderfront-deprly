<template>
 <div>Header입니다</div>   
 <v-app-bar>
 <v-container>
    <v-row>
        <v-col class="d-flex justify-atsrt">
            <!-- jwt는 다 문자열로 받아옴 -->
            <div v-if="userRole==='ADMIN'">
                <v-btn :to="'/member/list'">회원관리</v-btn>
                <v-btn :to="'/product/manage'">상품관리</v-btn>
                <v-btn href="'/order/list'">실시간주문접속{{ liveOrderCount }}</v-btn>
            </div>
        </v-col>
        <v-col class="text-center">
            <v-btn :to="'/'">spring shop</v-btn>
        </v-col>
        <v-col calss="d-flex justify-end">
            <v-btn v-if="isLogined" :to="'/order/cart'" >장바구니{{ totalQuantity }}</v-btn>
            <v-btn :to="'/product/list'">상품목록</v-btn>
            <v-btn v-if="isLogined" :to="'/member/mypage'">마이페이지</v-btn>
            <v-btn v-if="!isLogined" :to="'/member/create'">회원가입</v-btn>
            <v-btn v-if="!isLogined" :to="'/member/login'">로그인</v-btn>
            <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
        </v-col>

    </v-row>

 </v-container>
 </v-app-bar>
</template>
<script>
import { cartStore } from '@/store/cart';
import axios from 'axios';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { jwtDecode } from 'jwt-decode';

// import TestVue from './practice/0.TestVue.vue';

export default{
    data(){
        return{
            // totalQuantity: 0,
            userRole: null,
            isLogined: false,
            liveOrderCount: 0,

        }
    },
     created(){
        //  화면이 열리는 시점에서 분기 처리
        //  열리는 순간 로그인 하면 이걸 기준으로 바낌
        const accessToken = localStorage.getItem("accessToken");
        if(accessToken){
            const payload = jwtDecode(accessToken);
            console.log(payload.role);
            this.userRole = payload.role;
            this.isLogined= true;
        }
        if(this.userRole === "ADMIN"){
        this.sseConnect();
        }
    },
     computed: {
        totalQuantity(){
            const Store = cartStore();
            return Store.gettotalQuantity;
        }
     },
    methods: {
    sseConnect(){
        const accessToken = localStorage.getItem("accessToken");
        const sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URL}/sse/connect`,{
            headers: {Authorization: `Bearer ${accessToken}`}});
            
        sse.addEventListener("connect", (event)=>{
            console.log(event);
        })
        sse.addEventListener("ordered", (event)=>{
            console.log(event);
            this.liveOrderCount++;
        });
        //sse연결을 위한 이벤트 설정
        window.addEventListener("beforeunload",this.disconnect)
        },
        async disconnect(){
            await axios.get(`${process.env.VUE_APP_API_BASE_URL}/sse/disconnect`);
        },
        // 레디스도 지워줘야됨
        doLogout(){
            localStorage.clear();
            // 깜밖임 존재
            // window.location.reload();
            this.isLogined=false;
            //이게 있어야 관리자 창 없어짐
            this.userRole = null;
            // 리다렉트
            this.$router.push("/")
        }

    }
}
</script>