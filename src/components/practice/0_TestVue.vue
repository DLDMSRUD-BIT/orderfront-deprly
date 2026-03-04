<template>
    <div>html 화면</div>
    <!-- 화면 내에서 변수를 사용할 때에는 {{  }}를 사용 -->
    <div>{{ name }}</div>
    <div>{{ email }}</div>
    <!-- 클릭하면 : 이벤트 요소 -->
    <button @click="test()">test 함수 호출</button>
</template> 

<script>
export default{
    // 컴포넌트의 이름
    name: "TestVue",
    // 컴포넌트 내에서 사용할 변수 정의
    data(){
        return{
            name: "hongildong",
            email: "hong@naver.com"
        }
    },
    // 컴포넌트 내에서 사용할 함수 (메서드) 정의
    methods:{
        test(){
            console.log("hello world");
            // view에서 전역 변수에 접근할 떄에는 템플릿에서는 this 없이 가능하지만 메서드에서는 this키워드 필요
            console.log(this.name);
            console.log(this.email);
        }
    }

}
</script>

<style>

</style>
 <!-- 왜 비워져있는지 이름을 맞춰야되는지 잘 모르면 0209강의 보기  -->