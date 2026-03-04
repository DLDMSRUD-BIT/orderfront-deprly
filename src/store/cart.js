import { defineStore } from "pinia";


export const cartStore = defineStore("cart",{
    // 물리적 저장소(db가 아닌)에 저장 가능
    state: () => ({
        // 전역상태관리의 변수값은 화면새로고침시 리셋
        // 로컬스트리지는 저장값은 문자열로 저장-> parseInt해서 숫자로 전환
        totalQuantity: parseInt(localStorage.getItem("totalQuantity")) || 0,
        productInCart: JSON.parse(localStorage.getItem("productInCart")) || []

    }),

    actions:{
        addCart(product){
           this.totalQuantity += product.productCount;
           localStorage.setItem("totalQuantity",this.totalQuantity);
           const existProduct = this.productInCart.find(p=>p.productId === product.productId)
           if(existProduct){
            existProduct.productCount += product.productCount
           }else{
            this.productInCart.push(product);
           }
           localStorage.setItem("productInCart",JSON.stringify(this.productInCart));
        },
        clearCart(){
            localStorage.removeItem("productInCart");
            localStorage.removeItem("totalQuantity")
            this.productInCart = [];
            this.totalQuantity =0 ;
        }
    },
    getters:{
        gettotalQuantity: state => state.totalQuantity,
        getproductInCart: state => state.productInCart
    }
}

)