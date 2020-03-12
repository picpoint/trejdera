var ctx = document.getElementById('ethereumchart').getContext('2d');
let ethHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let ethHourlabelName = 'ethereum chart';
let bgColorGreenEthHour = 'green';
let brdColorGreenEthHour = 'green';
let ethHourdata = [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50];

let ethcharthour = new Charts(ethHourlabels, ethHourlabelName, bgColorGreenEthHour, brdColorGreenEthHour, ethHourdata);
ethcharthour.chartMethod();




let crdethhour = document.querySelector('.crdethhour');

crdethhour.addEventListener('click', () => {
  let ethHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
  let ethHourlabelName = 'ethereum chart';
  let bgColorGreenEthHour = 'green';
  let brdColorGreenEthHour = 'green';
  let ethHourdata = [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50];

  ethcharthour = new Charts(ethHourlabels, ethHourlabelName, bgColorGreenEthHour, brdColorGreenEthHour, ethHourdata);
  ethcharthour.chartMethod();
});