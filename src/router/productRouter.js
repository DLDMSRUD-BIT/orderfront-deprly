import ProductCreate from "@/views/member/product/ProductCreate.vue";
import ProductList from "@/views/member/product/ProductList.vue";

export const productRouter = [
    {
        path: "/product/create",
        name: "ProductCreate",
        component: ProductCreate
    }, 
    {
        path: "/product/list",
        name: "ProductList",
        component: ProductList,
        props: {isAdmin: false, pagetitle:"상품목록"}
    },     
    {
        path: "/product/manage",
        name: "ProductManage",
        component: ProductList,
        props: {isAdmin: true,pagetitle: "상품 관리"}
    },     
         
]