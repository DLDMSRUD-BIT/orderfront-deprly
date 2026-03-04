import { createRouter, createWebHistory } from "vue-router";
import { practiceRouter } from "./praticeRouter";
import { memberRouter } from "./memberRouter";
import { productRouter } from "./productRouter";
import { OrderListRouter } from "./OrderRouter";

const routes = [
    ...practiceRouter,
    ...memberRouter,
    ...productRouter,
    ...OrderListRouter    
]

// 안 쓰는 건 삭제 
// routes에서는 url경로와 화면을 맵핑


// 일반적으로 .js에서는 export default가 아닌 named export방식 사용 .vue에서는 export default 사용
export const router = createRouter(
    {
        // vue 라우트 방법은 두가지
        // createWebHashHistory: http:// localhost:3000/#/member/create
        history: createWebHistory(),
        routes
    }
)


