let arrowup = document.querySelector('.smart__arrowup');



function getCoords(div) {
  let elem = div.getBoundingClientRect();
  let top = elem.top + pageYOffset;
  return top;
}



function showBlock() {
  let valueScroll = getCoords(arrowup);
  
  if(valueScroll > 1000) {
    arrowup.style.opacity = '1';
    arrowup.style.cursor = 'pointer';
    arrowup.firstElementChild.style.cursor = 'pointer';
    arrowup.lastElementChild.style.cursor = 'pointer';    
  } else {
    arrowup.style.opacity = '0';
    arrowup.style.cursor = 'default';
    arrowup.firstElementChild.style.cursor = 'default';
    arrowup.lastElementChild.style.cursor = 'default';
  }
}


function pageUp() {  
  window.scrollTo(0, 0);  
}



window.addEventListener('scroll', showBlock);
window.addEventListener('load', showBlock);
arrowup.addEventListener('click', pageUp);