let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}



document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
window.onload = fadeOut;