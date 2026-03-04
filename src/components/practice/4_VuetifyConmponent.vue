<template>
    <v-container>
        <v-row>
            <!-- 기준 clo은 12 -->
            <v-col cols="8"> hello world </v-col>
            <v-col colss="14"> hello 2</v-col>
        </v-row>
        <v-row>
            <v-card>
                <v-card-title>
                    회원가입
                </v-card-title>
                <v-card-text>
                    회원가입 해
                </v-card-text>
            </v-card>
        </v-row>
        <v-row>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>이름</th><th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>test1</td><td>test1@naver.com</td></tr>
                    <tr><td>test</td><td>test@naver.com</td></tr>
                </tbody>
            </v-simple-table>
        </v-row>
        <v-row>
            <v-card>
                <!-- 뷰티파이와 순수css함께적용 가능 but 원하는 정확한 디자인을 적용하기 위해서는 순수 css만을 사용 -->
            <v-card-title class="abc" style="font-size:30px">
                회원가입
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                    label="name"
                    type="text"/>
                    <v-text-field
                    label="emaill"
                    type="emaill"/>
                    <v-text-field
                    label="password"
                    type="password"/>
                    <v-btn color="secondary">제출하기</v-btn>
                </v-form>
            </v-card-text>    
            </v-card>
        </v-row>
        <v-btn @click="basicPopup()">기본팝업</v-btn>
        <v-btn @click="cancel()">모달잠(취소버튼)</v-btn>
        <!-- 내부적으로 true false를 가지고 있오 외부에 공개될지 말지 결정 -->
        <v-dialog v-model="trueOrFalse" max-width="400px">
            <v-card>
            <v-card-title>
                정말 취소하나요
            </v-card-title>
            <v-card-actions>
                <v-btn color="primary" @click="confirm()">예</v-btn>
                <v-btn color="secondary" @click="reset()">아니</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
export default{
    data(){
        return{
            trueOrFalse: false,

        }
    },
    methods:{
        basicPopup(){
            alert("hello")
        },
        cancel(){
            this.trueOrFalse=true

        },
        confirm(){
            // 상황에 맞는 로직
            this.trueOrFalse=false
        },
        reset(){
            this.trueOrFalse=false
        }
    }
}
</script>
<style>
#signup-title{
    color: aqua;
}
.abc{
    font-family: 'Courier New', Courier, monospace;
}
</style>