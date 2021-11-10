const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".far.fa-times-circle")
const openRegister = document.querySelector(".register")
if(openRegister){
openRegister.addEventListener('click', ()=>{
    modal.style.display = 'flex'
})
}
function showModal(){
    modal.style.display = 'none'
}