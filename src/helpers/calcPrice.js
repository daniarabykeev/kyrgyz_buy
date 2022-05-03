export function calcTotalPrice(products){
    let totalPrice = 0;
    products.forEach((item)=>{
        totalPrice += +item.subPrice
    })
    return totalPrice
}
export function calcSubPrice(product){
   return +product.count * +product.item.price
}