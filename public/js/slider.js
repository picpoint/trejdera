let movies = document.querySelector('.promoann__movies');         // блок promoann с видеоблоками
let moviesChilds = movies.children;                               // дочерние видео-блоки 
let wdthScreen = document.documentElement.clientWidth;            // определяем ширину экрана



class Slider {                                                    // класс Slider для прокрутки элементов
  constructor(paretnblock, childrens) {                           // конструктор, paretnblock - родительский блок, childrens - дочерние элементы
    this.paretnblock = paretnblock;
    this.childrens = childrens;
  }
  
  
  scrolling() {                                                   // ф-ия прокрутки 
    let offset = 0;
    
    setTimeout(() => {
      for(let i = 0; i < this.childrens.length; i++) {
        setInterval(() => {          
            //console.log(this.childrens[i]);
            this.childrens[i].style.position = 'relative';
            if(offset < wdthScreen) {
              offset += 3;
            }
            this.childrens[i].style.right = offset + 'px';
        }, 10);
      }
    }, 3000);
    //console.log(this.childrens);    
  }
  

  
}


let block = new Slider(movies, moviesChilds);                      // вызываем класс с конкретным блоком и его дочерними элементами
block.scrolling();                                                 // вызываем ф-ию прокрутки