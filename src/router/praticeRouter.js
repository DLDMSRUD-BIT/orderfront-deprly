import TestVue from "@/components/practice/0_TestVue.vue";
import TestVue2 from "@/components/practice/0_TestVue2.vue";
import ModelingConmponent from "@/components/practice/1_ModelingConmponent.vue";
import ConditionalConmponent from "@/components/practice/2_ConditionalConmponent.vue";
import HookConmponent from "@/components/practice/3_HookConmponent.vue";
import VuetifyConmponent from "@/components/practice/4_VuetifyConmponent.vue";
import RoutConmponent from "@/components/practice/5_RoutConmponent.vue";
import RoutConmponent2 from "@/components/practice/5_RoutConmponent2.vue";
import RoutConmponent3 from "@/components/practice/5_RoutConmponent3.vue";
import StoreTestComponent from "@/components/practice/6_StoreTestComponent.vue";

// 안 쓰는 건 삭제 
// routes에서는 url경로와 화면을 맵핑

export const practiceRouter = [
    {
        path: "/practice/test",
        name: "TestVue",
        component: TestVue
    },
    {
        path: "/practice/test2",
        name: "TestVue2",
        component: TestVue2
    },
    {
        path: "/practice/modeling",
        name: "modeling",
        component: ModelingConmponent
    },
    {
        path: "/practice/Conditional",
        name: "Conditional",
        component: ConditionalConmponent
    },
    {
        path: "/practice/hook",
        name: "Hook",
        component:HookConmponent
    },
    {
        path: "/practice/vuefify",
        name: "VuetifyConmponent",
        component:VuetifyConmponent
    },
    {
        path: "/practice/rout",
        name: "RoutConmponent",
        component: RoutConmponent
    },  
    {
        path: "/practice/rout2",
        name: "RoutConmponent2",
        component: RoutConmponent2
    },  
    {
        path: "/practice/rout3/:productId",
        name: "RoutConmponent3",
        component: RoutConmponent3
    }, 
    {
        path: "/practice/store",
        name: "StoreTestComponent",
        component: StoreTestComponent
    },     
]
