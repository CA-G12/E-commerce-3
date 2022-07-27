// Pure functions
function addToArr(arr,obj){
  arr = [...arr,obj]
  return arr
}
function removeFromArr(arr,id){
  arr = [...arr]
  arr.forEach((e, index) => {
    if (e.id === id) {
      arr.splice(index, 1);
    }
  });
  return arr 
}


function setItem(key, arr) {
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}
function addItemTo(key, obj) {
  let arr = localStorage.getItem(key);
  arr = JSON.parse(arr);
  arr = addToArr(arr,obj)
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}
function removeItemFrom(key, id) {
  let arr = localStorage.getItem(key);
  arr = JSON.parse(arr);
  arr = removeFromArr(arr,id)
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}

module.exports = {
  addToArr ,
  removeFromArr , 

}