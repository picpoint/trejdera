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

  

}


let block = new Slider(movies, moviesChilds);
block.shows();