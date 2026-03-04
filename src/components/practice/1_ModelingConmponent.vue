<!--ModelingComponent입니다  -->
<!-- 라우트: /practice/modeling -->
 <template>
    <!-- 단방향바인딩: 변수 -> 화면 -->
    <div>hello world{{ language }}</div>
    <!-- 양방향 바인딩 : 변수 ->화면,화면->변수 , v-model문법 사용 -->
    <input type="text" v-model="language">
    <button @click="showValue()">변수 확인</button>
 </template>

 <script>
 export default{
    data (){

        return{
            language:"java"
        }

    },
    methods:{
        showValue(){
            console.log(this.language)
        }

    }
 }
</script>
<style>
</style>