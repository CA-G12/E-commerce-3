function getItem(key) {
  let arr = localStorage.getItem(key);
  arr = JSON.parse(arr);
  return arr;
}
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

function updateItemFrom(key, id, obj) {
  let arr = localStorage.getItem(key);
  arr = JSON.parse(arr);
  arr.forEach((e, index) => {
    if (e.id === id) {
      arr[index] = { ...obj, id };
    }
  });
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}
