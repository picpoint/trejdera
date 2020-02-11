let burgermenu = document.querySelector('.smart__burgermenu');
let menublock = document.querySelector('.smart__menublock');
console.log(menublock);


burgermenu.addEventListener('click', () => {  
  burgermenu.firstElementChild.classList.toggle('smart__burgerlineonerotate');
  burgermenu.firstElementChild.nextElementSibling.classList.toggle('smart__burgerlinetworotate');
  burgermenu.lastElementChild.classList.toggle('smart__burgerlinethreerotate');  
  
});

