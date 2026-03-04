<template>
    <MemberDetail
    :isMypage="true"
    />
    <OrderList
    :isMypage="true"
    />
</template>
<script>
import MemberDetail from './MemberDetail.vue';
import OrderList from './order/OrderList.vue';

export default{
    components:{
        MemberDetail,OrderList
    }
}

</script>