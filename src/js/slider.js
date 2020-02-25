let movies = document.querySelector('.promoann__movies');         // блок promoann с видеоблоками
let moviesChilds = movies.children;                               // дочерние видео-блоки 
let wdth = document.documentElement.clientWidth;                  // определяем ширину экрана



class Slider {                                                    // класс Slider для прокрутки элементов
  constructor(paretnblock, childrens) {                           // конструктор, paretnblock - родительский блок, childrens - дочерние элементы
    this.paretnblock = paretnblock;
    this.childrens = childrens;
  }
  
  scrolling() {                                                   // ф-ия прокрутки 
    let offset = 0;                                               // изначальное смещение = 0
    
    for(let i = 0; i < this.childrens.length; i++) {              // для всех дочерних элементов 
      this.childrens[i].style.position = 'relative';              // ставим относительное позиционирование
  
      setTimeout(() => {                                          // через 1с
        setInterval(() => {                                       // по интервалу 50 мс
          if(offset < wdth) {                                     // если смещение < ширины экрана
            offset += 5;                                          // на каждом шаге добавляем 5рх
            this.childrens[i].style.right = offset + 'px';        // каждому дочернему блоку присваиваем новое значение смещения вправо
          }
        }, 50);
      }, 1000);      

    }
  }

  
}


let block = new Slider(movies, moviesChilds);                      // вызываем класс с конкретным блоком и его дочерними элементами
block.scrolling();                                                 // вызываем ф-ию прокрутки