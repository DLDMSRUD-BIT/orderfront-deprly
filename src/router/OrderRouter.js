import OrderCart from "@/views/member/order/OrderCart.vue";
import OrderList from "@/views/member/order/OrderList.vue";


export const OrderListRouter = [
    {
        path: "/order/list",
        name: "OrderList",
        component: OrderList
    }, 
    {
        path: "/order/cart",
        name: "OrderCart",
        component: OrderCart
    },         
]