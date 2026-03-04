<template>
    <v-btn href="/practice/rout2" >일반라우팅</v-btn>
    <v-btn @click="hrefRouting()">일반라우팅(함수)</v-btn>
    <!-- 이거 직관적이여서 추천 -->
    <v-btn :to="'/practice/rout2'">spa 경로기반라우팅</v-btn>    
    <v-btn @click="spaRouting1()">spa 경로기반라우팅(함수)</v-btn>  
    <v-btn :to="{ name: 'RoutConmponent2'}">spa 이름기반라우팅</v-btn>      
    <v-btn @click="spaRouting2()">spa 이름기반라우팅(함수)</v-btn>         
    <v-btn @click="gotoProudct()">상품상세조회</v-btn>     
</template>

<script>

    export default {
     data(){

     },
     methods:{
        hrefRouting(){
            // 화면전체에 새로고침이 발생하는 라우팅방식
            // 모든 컴포넌트가 새롭게 created 특징2.인터넷이 약간 지연되면 느림
            window.location.href="/practice/rout2";
        },
        spaRouting1(){
            //  spa방식
            // 특징1 새롭게 라우트되는 컴포넌트만 created 특징 새로고침 없는 메이지로드
            this.$router.push("/practice/rout2")
        },
        spaRouting2(){
            this.$router.push({name: "RoutConmponent2"})
        },
        gotoProudct(){
            this.$router.push("/practice/rout3/"+this.id)
        }
     }
    }
</script>

<style>

</style>