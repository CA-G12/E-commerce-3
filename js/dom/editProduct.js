
const editedItem = getItem('editedItem')
const item = getItem('allProduct').find(ele => ele.id = editedItem)
console.log(item)

document.getElementById('name').value = item.name 
document.getElementById('price').value = +item.price 
document.getElementById('category').value = item.category 
document.getElementById('image').value = item.img  


