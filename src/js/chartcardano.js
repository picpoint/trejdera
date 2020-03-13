var ctx = document.getElementById('cardanochart').getContext('2d');
let crdHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let crdHourlabelName = 'cardano chart';
let bgColorGreenCardanoHour = 'green';
let brdColorGreenCardanoHour = 'green';
let crdHourdata = [0, 10, 5, 50, 30, 15, 40];

let crdchart = new Charts(crdHourlabels, crdHourlabelName, bgColorGreenCardanoHour, brdColorGreenCardanoHour, crdHourdata);
crdchart.chartMethod();




let crdcardanohour = document.querySelector('.crdcardanohour');

crdcardanohour.addEventListener('click', () => {
  let crdHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
  let crdHourlabelName = 'cardano chart';
  let bgColorGreenCardanoHour = 'green';
  let brdColorGreenCardanoHour = 'green';
  let crdHourdata = [0, 10, 5, 50, 30, 15, 40];

  let crdcharthour = new Charts(crdHourlabels, crdHourlabelName, bgColorGreenCardanoHour, brdColorGreenCardanoHour, crdHourdata);
  crdcharthour.chartMethod();  
});




let crdcardanoday = document.querySelector('.crdcardanoday');

crdcardanoday.addEventListener('click', () => {
  let crdDaylabels = ['5', '10', '15', '20', '25', '30'];
  let crdDaylabelName = 'cardano chart';
  let bgColorGreenCardanoDay = 'green';
  let brdColorGreenCardanoDay = 'green';
  let crdDaydata = [1, 2, 3, 4, 5, 6];

  let crdchartday = new Charts(crdDaylabels, crdDaylabelName, bgColorGreenCardanoDay, brdColorGreenCardanoDay, crdDaydata);
  crdchartday.chartMethod();

});



let crdcardanoweek = document.querySelector('.crdcardanoweek');

crdcardanoweek.addEventListener('click', () => {
  let crdWeeklabels = ['1', '2', '3', '4'];
  let crdWeeklabelName = 'cardano chart';
  let bgColorGreenCardanoWeek = 'green';
  let brdColorGreenCardanoWeek = 'green';
  let crdWeekdata = [41, 2, 5, 44];

  let crdchartweek = new Charts(crdWeeklabels, crdWeeklabelName, bgColorGreenCardanoWeek, brdColorGreenCardanoWeek, crdWeekdata);
  crdchartweek.chartMethod();
});




let crdcardanomonth = document.querySelector('.crdcardanomonth');

crdcardanomonth.addEventListener('click', () => {
  let crdMonthlabels = ['1', '2', '3'];
  let crdMonthlabelName = 'cardano chart';
  let bgColorGreenCardanoMonth = 'green';
  let brdColorGreenCardanoMonth = 'green';
  let crdMonthdata = [15, 8, 32, 35];

  let crdchartmonth = new Charts(crdMonthlabels, crdMonthlabelName, bgColorGreenCardanoMonth, brdColorGreenCardanoMonth, crdMonthdata);
  crdchartmonth.chartMethod();
});