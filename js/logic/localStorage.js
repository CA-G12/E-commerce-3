function setItem(key, arr) {
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}
function addItemTo(key, obj) {
  let arr = localStorage.getItem(key);
  arr = JSON.parse(arr);
  arr.push(obj);
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}
function removeItemFrom(key, id) {
  let arr = localStorage.getItem(key);
  arr = JSON.parse(arr);
  arr.forEach((e, index) => {
    if (e.id === id) {
      arr.splice(index, 1);
    }
  });
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}
