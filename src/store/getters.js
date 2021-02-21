export default {
  cartCount(state){
    return state.cartList.length
  },
  checkedPrice(state){
    let checkedPrice= 0;
    for(let good of state.cartList){
      if(good.ischecked){
        checkedPrice+=(parseFloat(good.price).toFixed(2)*good.count)
      }
    }
    return checkedPrice
  },
  checkedCount(state){
    let checkedCount = 0;
    for(let good of state.cartList){
      if(good.ischecked){
        checkedCount+=good.count
      }
    }
    return checkedCount
  }
}