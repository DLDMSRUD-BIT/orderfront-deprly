
<!-- 화면에 요소는 template 안에 작업 -->
<template>
  <!-- <div>Hello world Vue</div> -->
   <!-- 현재 url에 매칭된 컴포넌트를 렌더링(화면 생성) 하는 영역 -->
   <!-- <div>Header입니다</div> -->
   <v-app>
    <header-component/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-component/>
   </v-app>
   <!-- <div>Footer요소</div> -->
</template>

<!-- js에 요소는 script 안에 작업 -->
<script>
import FooterComponent from './components/FooterComponent.vue';
// import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
// import HeaderComponent from './components/HeaderComponent.vue';

// import { router } from './router';

// vue는 export를 통하여 .vue파일 또는 .js등의 요소를 다른화면에서도 import할수 있도록 설정
export default {
  // name을 생략시 파일명이 name이 됨
  name: "App",
  components:{
    HeaderComponent,FooterComponent
  }

  }
</script>

<!-- css요소는 style안에 작업 -->
<style>

</style>
