

const btn=document.querySelector('.add-btn')
const form = document.querySelector('.add-form')


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
