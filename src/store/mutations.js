export default {
  //mutation唯一的目的就是修改state中的状态
  //中的方法尽可能完成的时间比较单一一点好
  // addCart (state,payload){
  //   const oldInfo = state.cartList.find (item=>item.iid === payload.iid)
  //   if(oldInfo){
  //     oldInfo.const += 1;
  //   }else{
  //     payload.const=1;
  //     state.cartList.push(payload)
  //   }
  // }
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.ischecked = false;
    state.cartList.push(payload)
  }
}