

const btn=document.querySelector('.add-btn')
const form = document.querySelector('.add-form')


btn.addEventListener('click',function(e){
    let obj={
    }
    e.preventDefault()
    let inputs=form.querySelectorAll('input')
    inputs.forEach(ele => {
        obj.id = Date.now()
        obj.name=ele.value 
        obj.price=ele.value
        obj.category=ele.value
        obj.img=ele.value

    });
    console.log(addItemTo);
    console.log(obj);
    addItemTo('allProduct',obj);
    inputs.forEach(ele =>{
        ele.value=""
    })
})
