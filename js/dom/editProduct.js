
const editedItem = getItem('editedItem')
const item = getItem('allProduct').find(ele => ele.id = editedItem)
console.log(item)

document.getElementById('name').value = item.name 
document.getElementById('price').value = +item.price 
document.getElementById('category').value = item.category 
document.getElementById('image').value = item.img  

const btn=document.querySelector('.add-btn')
btn.addEventListener('click',function(e){
    let obj={
    }
    e.preventDefault()

    obj.id = Date.now()
    obj.name = document.querySelector('#name').value
    obj.price = document.querySelector('#price').value
    obj.category = document.querySelector('#category').value
    obj.img = document.querySelector('#image').value

  /*   console.log(addItemTo);
    console.log(obj);
     */
    document.querySelector('#name').value=""
    document.querySelector('#price').value=""
    document.querySelector('#category').value=""
    document.querySelector('#image').value=""
})
addItemTo('allProducts',obj)