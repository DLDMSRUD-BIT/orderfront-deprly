<template>
    <div>라우트3</div>
</template>

<script>
// import axios from 'axios';

    export default {
        data(){
            return{
                // id:null
            }
        },
        created(){
            this.id = this.$route.params.productId;
            console.log(this.id);
            // 아래와 같이 라우터를 통해 전달된 id값을 꺼내어 서버로 데이터 요청
            // const result = axios.get("http://localhost:3000/practice/rout1/"+this.id);
            // console.log(result);
        }
        
    }
</script>

<style>

</style>