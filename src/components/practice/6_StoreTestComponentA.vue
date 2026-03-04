<template>
<h1>sotre component A</h1>
<div>지역변수값 : {{ count }}</div>
<v-btn @click="incrementCount()">지역변수 count값 증가</v-btn>
<div>전역변수값 : {{ getStoredCount }}</div>
<v-btn @click="incrementStoreCount()">전역변수 count값 증가</v-btn>
</template>
<script>
import { cartStore } from '@/store/cart';
import { practiceStore } from '@/store/practice';


export default{
    data(){
        return{
            count: 0,
        }
    },
    computed:{
        getStoredCount(){
            const store = cartStore();
            return store.gettotalQuantity;
        }
    },
    methods:{
        incrementCount(){
            this.count++;
        },
        incrementStoreCount(){
            const store = practiceStore();
            store.incrementCount();
        }
    }
}
</script>