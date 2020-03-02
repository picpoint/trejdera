let arrowup = document.querySelector('.smart__arrowup');                      // блок со стрелкой и подписью



class ScrollingPageUp {
  constructor(blockArrow) {
    this.blkArr = blockArrow;
  }

  getCoords() {
    let elem = this.blkArr.getBoundingClientRect();      
    let top = elem.top + pageYOffset;    
    return top;
  }

  showBlock() {
    let valueScroll = this.getCoords();                    
    if(valueScroll > 1000) {
      this.blkArr.style.opacity = '1';
      this.blkArr.style.cursor = 'pointer';
      this.blkArr.firstElementChild.style.cursor = 'pointer';
      this.blkArr.lastElementChild.style.cursor = 'pointer';
    } else { 
      this.blkArr.style.opacity = '0';
      this.blkArr.style.cursor = 'default';
      this.blkArr.firstElementChild.style.cursor = 'default';
      this.blkArr.lastElementChild.style.cursor = 'default';
    }
  }

  pageUp() {
    window.scrollTo(0, 0);  
  }
}



let makeUp = new ScrollingPageUp(arrowup);

window.addEventListener('scroll', () => {
  makeUp.showBlock();
});

window.addEventListener('load', () => {
  makeUp.showBlock();
});

arrowup.addEventListener('click', () => {
  makeUp.pageUp();
});






// FUNCTIONALS PROGRAMMING
/*
function getCoords(div) {                                                     // ф-ия получения координат блока
  let elem = div.getBoundingClientRect();                                     // определяем координаты
  let top = elem.top + pageYOffset;                                           // top = координата + текущая прокрутка 
  return top;                                                                 // возвращайем координату 
}



function showBlock() {                                                        // ф-ия показать блок
  let valueScroll = getCoords(arrowup);                                       // переменной valueScroll присваиваем координату блока arrowup
  
  if(valueScroll > 1000) {                                                    // если значение > 1000
    arrowup.style.opacity = '1';                                              // делаем его видимым 
    arrowup.style.cursor = 'pointer';                                         // стиль курсора блока ставим - указатель
    arrowup.firstElementChild.style.cursor = 'pointer';                       // стиль курсора стрелки ставим - указатель
    arrowup.lastElementChild.style.cursor = 'pointer';                        // стиль курсора текста ставим - указатель
  } else { 
    arrowup.style.opacity = '0';                                              // прозрачность блока ставим в 0
    arrowup.style.cursor = 'default';                                         // стиль курсора блока ставим - по умолчанию
    arrowup.firstElementChild.style.cursor = 'default';                       // стиль курсора стрелки ставим - по умолчанию
    arrowup.lastElementChild.style.cursor = 'default';                        // стиль курсора текста ставим - по умолчанию
  }
}


function pageUp() {                                                           // ф-ия перебрасыающая в начало страницы
  window.scrollTo(0, 0);  
}



window.addEventListener('scroll', showBlock);                                 // на событие прокрутки вешаем ф-ию показа блока
window.addEventListener('load', showBlock);                                   // на событие загрузки страницы вешаем ф-ию показа блока
                                                                              //  - (сделано для того, чтобы если пользователь обновит страницу по середине, 
                                                                              //  -  у него показалась кнопка прокрутки)
arrowup.addEventListener('click', pageUp);                                    // вешаем событие click на блок и вызываем ф-ию переброса в начало страницы
*/