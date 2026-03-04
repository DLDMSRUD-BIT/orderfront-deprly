<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
             <v-card>
                <v-card-title class="text-h5 text-center">
                    회원가입
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                        label="이름"
                        type="text"
                        v-model="name"
                        />
                        <v-text-field
                        label="이메일"
                        type="email"
                        v-model="email"/>
                        <v-text-field
                        label="비밀번호"
                        type="password"
                        v-model="password"/>
                        <v-row>
                            <v-col>
                             <v-btn color="secondary" block @click="memberCreate()">등록</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>    
             </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';


export default {
    data(){
        return{
        name: null,
        email: null,
        password: null
     }
    },
    methods:{
        async memberCreate(){
            // 객체를 조립하여 axious.post하여자동 형변환
            // axois를 사용하면 try catch를 넣어라
            try{
            const data ={name:this.name,email:this.email,password:this.password}; //이건 프론트가 보내는 요청
            const result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`, data); //이건 백엔드가 보내는 요청
            console.log(result.data); //id를 의미 result 서버 바디 전체데이터에서 data=id왜냐 맴버컨트롤러 보면 body(id)니간
            this.$router.push("/")
            }catch(e){
                console.log(e)
                console.log(e.response)
                alert(e.response.data.error_message);
                // 프론트에서 보내는 data는 서버의 body부분을 의미
            }
        }
    }
    }
    
</script>

<style>

</style>