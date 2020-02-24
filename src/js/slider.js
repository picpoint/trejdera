let movies = document.querySelector('.promoann__movies');
let moviesChilds = movies.children;



class Slider {
  constructor(paretnblock, childrens) {
    this.paretnblock = paretnblock;
    this.childrens = childrens;
  }

  shows() {
    console.log(this.paretnblock);
    console.log(this.childrens);
  }

  scrolling() {
    for(let i = 0; i < this.childrens.length; i++) {
      this.childrens[i].style.position = 'relative';
      this.childrens[i].style.right = '100px';      
    }
  }

}


let block = new Slider(movies, moviesChilds);
block.shows();
block.scrolling();