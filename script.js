const toggle=document.getElementById('toggle')
console.log(toggle);


const nav =document.getElementById('nav')
console.log(nav);
toggle.addEventListener('click',()=>nav.classList.toggle('active'))