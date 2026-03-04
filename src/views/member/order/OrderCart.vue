<template>
    <v-container>
        <v-row justify="center">
            <v-col class="text-center">
                장바구니 목록
            </v-col>
        </v-row>
        <v-row justify="space-between">
            <v-col cols="auto">
                <v-btn color="secondary" @click="clearCart">장바구니 비우기</v-btn>
            </v-col>
            <v-col cols="auto">
                <v-btn color="primary" @click="createCart">주문하기</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-table>
                    <thead>
                        <tr>
                            <th>제품ID</th>
                            <th>제품명</th>
                            <th>가격</th>
                            <th>주문 수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in getproductInCart" :key="product.productId">
                            <td>{{ product.productId }}</td>
                            <td>{{ product.productName }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.productCount }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
import { cartStore } from '@/store/cart';
import axios from 'axios';

export default{
    data(){
        return{
            store: null

        }
    },
    created(){
        this.store = cartStore();
    },
    computed:{
        getproductInCart(){
            // const store = cartStore();
            return this.store.getproductInCart
        }
    },
    methods:{
        clearCart(){
            // const store = cartStore();
            this.store.clearCart();
        },
        async createCart(){
            //  axoius호출
            try{
            // const store = cartStore();   
            const data = this.store.getproductInCart.map(p=>({productId:p.productId,productCount:p.productCount}));
            if(data.length>0){
            await axios.post(`${process.env.VUE_APP_API_BASE_URL}/ordering/create`, data);
            alert("주문이 완료되었습니다")
            this.store.clearCart();
            }
            }
            catch(e)
            {
            console.log(e);
            alert("주문이 실패되었습니다")
            }
            //  장바구니 비우기
        }
    }
}

</script>