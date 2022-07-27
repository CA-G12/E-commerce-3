//return array of prouducts that price between (Price from, Price To)
function filterPrice(arr, priceFrom, priceTo) {
  let result = arr.filter((e) => e.price >= priceFrom && e.price <= priceTo);
  return result;
}


function filterCat(str,arr){
    
    let result=arr.filter((ele)=>{
       return ele.category === str;
    })
    return result;
}

module.exports = {
    filterCat,filterPrice
}
