var ctx = document.getElementById('bitcoinchart').getContext('2d');
let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let btcHourlabelName = 'bitcoin chart';
let bgColorRedChartHour = 'red';
let brdColorRedChartHour = 'red';
let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];

let btccharthour = new Charts(btcHourlabels, btcHourlabelName, bgColorRedChartHour, brdColorRedChartHour, btcHourdata);
btccharthour.chartMethod();  





let crdbithour = document.querySelector('.crdbithour');

crdbithour.addEventListener('click', ()=> {
  //var ctx = document.getElementById('bitcoinchart').getContext('2d');
  let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
  let btcHourlabelName = 'bitcoin chart';
  bgColorRedChartHour = 'red';
  brdColorRedChartHour = 'red';
  let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];

  let btccharthour = new Charts(btcHourlabels, btcHourlabelName, bgColorRedChartHour, brdColorRedChartHour, btcHourdata);
  btccharthour.chartMethod();  
});



let crdbitday = document.querySelector('.crdbitday');

crdbitday.addEventListener('click', () => {
  //var ctx = document.getElementById('bitcoinchart').getContext('2d');
  let btcDaylabels = ['5', '10', '15', '20', '25', '30'];
  let btcDaylabelName = 'bitcoin chart';
  let bgColorRedChartDay = 'red';
  let brdColorRedChartDay = 'red';
  let btcDaydata = [7, 10, 3, 15, 40, 23];

  let btcDaychart = new Charts(btcDaylabels, btcDaylabelName, bgColorRedChartDay, brdColorRedChartDay, btcDaydata);
  btcDaychart.chartMethod();
});



let crdbitweek = document.querySelector('.crdbitweek');

crdbitweek.addEventListener('click', () => {
  let btcWeeklabels = ['1', '2', '3', '4'];
  let btcWeeklabelName = 'bitcoin chart';
  let bgColorRedChartWeek = 'red';
  let brdColorRedChartWeek = 'red';
  let btcWeekdata = [17, 48, 3, 15];

  let btcWeekchart = new Charts(btcWeeklabels, btcWeeklabelName, bgColorRedChartWeek, brdColorRedChartWeek, btcWeekdata);
  btcWeekchart.chartMethod();
});



let crdbitmonth = document.querySelector('.crdbitmonth');

crdbitmonth.addEventListener('click', () => {
  let btcMonthlabels = ['1', '2', '3'];
  let btcMonthlabelName = 'bitcoin chart';
  let bgColorRedChartMonth = 'red';
  let brdColorRedChartMonth = 'red';
  let btcMonthdata = [17, 48, 3, 15];

  let btcMonthchart = new Charts(btcMonthlabels, btcMonthlabelName, bgColorRedChartMonth, brdColorRedChartMonth, btcMonthdata);
  btcMonthchart.chartMethod();
});
