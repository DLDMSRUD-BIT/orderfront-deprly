<template>
    <div>hook함수 테스트</div>
    <button @click="moveScreen">다른화면으로 이동(라우트 방식)</button>
    <div>{{count1}}</div>
    <button @click="count1up">count1증가</button>
    <div>computde된값: {{doubleCount}}</div>
</template>
<script>
export default{
    data(){
        return{
                count1:0,
        }
    },
    // 별도에 호출없이 바로 실행
    // 화면이 열리기전 (vue인스턴스가 생성되기전)실행되는 함수
    // 예) 목록조회 / 상세조회
    created(){
        console.log("creste test")
    },
    // 컴포넌트가 화면상에서 제거(이동) 될때 실행되는 함수
    // 예 채팅(알림)화면을 벗어나 다른화면으로 이동시에 실시간 연결종료요청
    // 물리적 경우는 제외
    beforeUnmount(){
        console.log("beforeUnmount test")
    },
    // 특정 변수값의 변경사항을 인지하여 함수를 자동실행하는 hook함수
    watch:{
        // 인지하고자 하는 변수값과 일치되는 함수명 사용
        // 예: 검색어 입력시 자동완성 api호출 / key up
        count1(){
            console.log("count1값 변화")
        }
    },
    // 화면전체에 변경사항을 인지하는 hook함수
    updated(){
        console.log("updated 테스트")
    },
    // 종속된 데이터가 변경될 때 함수가 실행하여 값을 재계산 해서 리턴하는 함수
    // 예: 장바구니 수량 보여줄때
    computed:{
        // this.count1이 변경되면 ,doubleCount함수가 실행되고, 변수처럼 사용
        doubleCount(){
            return this.count1 * 2
        }
    },
    // 호출있을 경우만 실행
    methods: {
        moveScreen(){
            this.$router.push("/practice/Conditional")
        },
        count1up(){
            this.count1++;
        }
    }
}
</script>