

function filterCat(str,arr){
    
    let result=arr.filter((ele)=>{
       return ele.category === str;
    })
    return result;
}

module.exports = {
    filterCat
}