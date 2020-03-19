var ctx = document.getElementById('ethereumchart').getContext('2d');                             // канвас отрисовки графика

let ethHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let ethHourlabelName = 'ethereum chart';
let bgColorGreenEthHour = 'green';
let brdColorGreenEthHour = 'green';
let ethHourdata = [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50];

let ethcharthour = new Charts(ethHourlabels, ethHourlabelName, bgColorGreenEthHour, brdColorGreenEthHour, ethHourdata);
ethcharthour.chartMethod();



let crdethhour = document.querySelector('.crdethhour');
crdethhour.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();  
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {	  
			obj = xhr.response;				
    }
  });

  xhr.send();	

	let ethHourlabels = obj.ethhour.tmlabels;	
	let ethHourlabelName = obj.ethhour.labelName;
	let bgColorRed = obj.ethhour.bgColor;
	let brdColorRed = obj.ethhour.brdColor;
	let ethHourdata = obj.ethhour.tmData;

	let ethHourChart = new Charts(ethHourlabels, ethHourlabelName, bgColorRed, brdColorRed, ethHourdata);	
	ethHourChart.chartMethod();

});






let crdethday = document.querySelector('.crdethday');
crdethday.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();  
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {	  
			obj = xhr.response;				
    }
  });

  xhr.send();	

	let ethDaylabels = obj.ethday.tmlabels;	
	let ethDaylabelName = obj.ethday.labelName;
	let bgColorRed = obj.ethday.bgColor;
	let brdColorRed = obj.ethday.brdColor;
	let ethDaydata = obj.ethday.tmData;

	let ethDayChart = new Charts(ethDaylabels, ethDaylabelName, bgColorRed, brdColorRed, ethDaydata);	
	ethDayChart.chartMethod();

});




















/*
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




let crdethday = document.querySelector('.crdethday');

crdethday.addEventListener('click', () => {
  let ethDaylabels = ['5', '10', '15', '20', '25', '30'];
  let ethDaylabelName = 'ethereum chart';
  let bgColorGreenEthDay = 'green';
  let brdColorGreenEthDay = 'green';
  let ethDaydata = [20, 22, 33, 1, 28, 40];

  let ethchartday = new Charts(ethDaylabels, ethDaylabelName, bgColorGreenEthDay, brdColorGreenEthDay, ethDaydata);
  ethchartday.chartMethod();
});



let crdethweek = document.querySelector('.crdethweek');

crdethweek.addEventListener('click', () => {
  let ethWeeklabels = ['1', '2', '3', '4'];
  let ethWeeklabelName = 'ethereum chart';
  let bgColorGreenEthWeek = 'green';
  let brdColorGreenEthWeek = 'green';
  let ethWeekdata = [50, 35, 33, 1];

  let ethchartweek = new Charts(ethWeeklabels, ethWeeklabelName, bgColorGreenEthWeek, brdColorGreenEthWeek, ethWeekdata);
  ethchartweek.chartMethod();
});




let crdethmonth = document.querySelector('.crdethmonth');

crdethmonth.addEventListener('click', () => {
  let ethMonthlabels = ['1', '2', '3'];
  let ethMonthlabelName = 'ethereum chart';
  let bgColorGreenEthMonth = 'green';
  let brdColorGreenEthMonth = 'green';
  let ethMonthdata = [17, 8, 20, 39];

  let ethchartmonth = new Charts(ethMonthlabels, ethMonthlabelName, bgColorGreenEthMonth, brdColorGreenEthMonth, ethMonthdata);
  ethchartmonth.chartMethod();
});
*/