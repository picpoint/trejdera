let burgermenu = document.querySelector('.smart__burgermenu');
let menublock = document.querySelector('.smart__menublock');
let menublockfloat = document.querySelector('.smart__menublockfloat');


burgermenu.addEventListener('click', () => {  
  burgermenu.firstElementChild.classList.toggle('smart__burgerlineonerotate');
  burgermenu.firstElementChild.nextElementSibling.classList.toggle('smart__burgerlinetworotate');
  burgermenu.lastElementChild.classList.toggle('smart__burgerlinethreerotate');  
  menublockfloat.classList.toggle('smart__menublockfloatshow');
  
});

