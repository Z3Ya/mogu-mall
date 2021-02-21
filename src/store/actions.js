export default {
  addCart (context,payload){
    return new Promise ((resolve,reject ) => {
      const oldInfo = context.state.cartList.find (item=>item.iid === payload.iid)
      if(oldInfo){
        context.commit('addCounter',oldInfo)
      }else{
        payload.count=1;
        context.commit('addToCart',payload)
      }
      resolve('已添加至购物车');
      reject('添加购物车失败')
    })
      
    }
}