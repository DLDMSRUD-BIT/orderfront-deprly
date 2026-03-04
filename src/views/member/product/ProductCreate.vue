<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
             <v-card>
                <v-card-title class="text-h5 text-center">
                    상품 등록
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                        label="상품명"
                        v-model="name"
                        />
                        <v-text-field
                        label="카테고리"
                        v-model="category"/>
                        <v-text-field
                        label="가격"
                        v-model.number="price"/>
                        <v-text-field
                        label="재고수량"
                        v-model.number="stockQuantity"/>  
                        <v-file-input
                        label="상품이미지"
                        @change="fileUpload"
                        multiple
                        />                      
                        <v-row>
                            <v-col>
                             <v-btn color="secondary" block @click="productCreate()">등록</v-btn>
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
// import { apply } from 'core-js/fn/reflect';


export default {
    data(){
        return{
            // 초기 타입을 맞춘다 예 : 숫자는 0이나 null 문자열을 null
        name: null,
        category: null,
        // html은 숫자가 없음 문자로 받으니간 숫자로 연산있을 경우 바꿔줘야됨 -> v-model.number 
        price: 0,
        stockQuantity: 0,
        productImage: null
     }
    },
    methods:{
        // 이벤트 객체에 업로드할 파일이 주입
        fileUpload(event){
            // 여러개의 이미지일 경우 for문을 실행하여 productImage리스트에 push
            this.productImage = event.target.files[0];
        },
        async productCreate(){
            try{
                // 멀티파트 formdata또는 url인코딩 방식의 경우 formdata클레스 사용
                const data = new FormData();
                data.append("name",this.name);
                data.append("category",this.category);
                data.append("price",this.price);
                data.append("stockQuantity",this.stockQuantity);
                // image를 아예 append시키지 않으면 백엔드에 dto에 null로 매핑되니 append시키면 백엔드에서 타입에러 발생
                if(this.productImage){
                data.append("productImage",this.productImage);
                }
                 await axios.post(`${process.env.VUE_APP_API_BASE_URL}/product/create`, data);
                 this.$router.push("/product/list");
            }catch(e){
                alert(e)
            }
        }
    }
    }
    
</script>

<style>

</style>