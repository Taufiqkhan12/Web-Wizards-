const loginClick=document.querySelector('.btn')
const Close =document.querySelector('.close');
const overlay =document.querySelector('.overlay')

loginClick.addEventListener('click',function(){
    loginClick.classList.remove('hidden');
overlay.classList.remove('hidden');
})