var ctx = document.getElementById('ripplechart').getContext('2d');
let rippHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let rippHourlabelName = 'ripple chart';
let bgColorGreenRippHour = 'green';
let brdColorGreenRippHour = 'green';
let rippHourdata = [10, 5, 15, 0, 5, 45, 50];

let rippcharthour = new Charts(rippHourlabels, rippHourlabelName, bgColorGreenRippHour, brdColorGreenRippHour, rippHourdata);
rippcharthour.chartMethod();





let crdripphour = document.querySelector('.crdripphour');

crdripphour.addEventListener('click', () => {
  let rippHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
  let rippHourlabelName = 'ripple chart';
  let bgColorGreenRippHour = 'green';
  let brdColorGreenRippHour = 'green';
  let rippHourdata = [10, 5, 15, 0, 5, 45, 50];

  let rippcharthour = new Charts(rippHourlabels, rippHourlabelName, bgColorGreenRippHour, brdColorGreenRippHour, rippHourdata);
  rippcharthour.chartMethod();  
});




let crdrippday = document.querySelector('.crdrippday');

crdrippday.addEventListener('click', () => {
  let rippDaylabels = ['5', '10', '15', '20', '25', '30'];
  let rippDaylabelName = 'ripple chart';
  let bgColorGreenRippDay = 'green';
  let brdColorGreenRippDay = 'green';
  let rippDaydata = [2, 15, 15, 1, 5, 4];

  let rippchartday = new Charts(rippDaylabels, rippDaylabelName, bgColorGreenRippDay, brdColorGreenRippDay, rippDaydata);
  rippchartday.chartMethod();
});




let crdrippweek = document.querySelector('.crdrippweek');

crdrippweek.addEventListener('click', () => {
  let rippWeeklabels = ['1', '2', '3', '4'];
  let rippWeeklabelName = 'ripple chart';
  let bgColorGreenRippWeek = 'green';
  let brdColorGreenRippWeek = 'green';
  let rippWeekdata = [1, 1, 15, 5];

  let rippchartweek = new Charts(rippWeeklabels, rippWeeklabelName, bgColorGreenRippWeek, brdColorGreenRippWeek, rippWeekdata);
  rippchartweek.chartMethod();
});




let crdrippmonth = document.querySelector('.crdrippmonth');

crdrippmonth.addEventListener('click', () => {
  let rippMonthlabels = ['1', '2', '3'];
  let rippMonthlabelName = 'ripple chart';
  let bgColorGreenRippMonth = 'green';
  let brdColorGreenRippMonth = 'green';
  let rippMonthdata = [4, 4, 4, 0];

  let rippchartmonth = new Charts(rippMonthlabels, rippMonthlabelName, bgColorGreenRippMonth, brdColorGreenRippMonth, rippMonthdata);
  rippchartmonth.chartMethod();
});