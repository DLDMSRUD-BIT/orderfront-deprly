import MemberCreate from "@/views/member/MemberCreate.vue";
import MemberDetail from "@/views/member/MemberDetail.vue";
import MemberList from "@/views/member/MemberList.vue";
import MemberLongin from "@/views/member/MemberLongin.vue";
import MemberMypage from "@/views/member/MemberMypage.vue";

export const memberRouter = [
    {
        path: "/member/create",
        name: "MemberCreate",
        component: MemberCreate
    },
    {
        path: "/member/login",
        name: "MemberLongin",
        component: MemberLongin
    },
    {
        path: "/member/list",
        name: "MemberList",
        component: MemberList
    },    
    {
        path: "/member/detail/:memberId",
        name: "MemberDetail",
        component: MemberDetail
    },  
    {
        path: "/member/mypage",
        name: "MemberMypage",
        component: MemberMypage
    },      
         
]