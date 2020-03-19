var ctx = document.getElementById('bitcoinchart').getContext('2d');                             // канвас отрисовки графика
let url = 'https://raw.githubusercontent.com/picpoint/trejdera/master/datasCharts.json';        // url json файлы
let obj;                                                                                        // переменная в которую будет помещаться ответ запроса



let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];                                    
let btcHourlabelName = 'bitcoin chart';
let bgColorRedChartHour = 'red';
let brdColorRedChartHour = 'red';
let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];

let btccharthour = new Charts(btcHourlabels, btcHourlabelName, bgColorRedChartHour, brdColorRedChartHour, btcHourdata);
btccharthour.chartMethod();  





let crdbithour = document.querySelector('.crdbithour');
crdbithour.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();  
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {	  
			obj = xhr.response;	
			console.log(obj);
    }
  });

  xhr.send();	

	let btcHourlabels = obj.btchour.tmlabels;	
	let btcHourlabelName = obj.btchour.labelName;
	let bgColorRed = obj.btcday.bgColor;
	let brdColorRed = obj.btcday.brdColor;
	let btcHourdata = obj.btchour.tmData;

	let btcHourChart = new Charts(btcHourlabels, btcHourlabelName, bgColorRed, brdColorRed, btcHourdata);	
	btcHourChart.chartMethod();

});






let crdbitday = document.querySelector('.crdbitday');

crdbitday.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {	  
			obj = xhr.response;	
			console.log(obj);
    }
  });

  xhr.send();
	
	let btcDaylabels = obj.btcday.tmlabels;	
	let btcDaylabelName = obj.btcday.labelName;
	let bgColorRed = obj.btcday.bgColor;
	let brdColorRed = obj.btcday.brdColor;
	let btcDaydata = obj.btcday.tmData;

	let btcDayChart = new Charts(btcDaylabels, btcDaylabelName, bgColorRed, brdColorRed, btcDaydata);	
	btcDayChart.chartMethod();

});





let crdbitweek = document.querySelector('.crdbitweek');

crdbitweek.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {	  
			obj = xhr.response;	
			console.log(obj);
    }
  });

  xhr.send();
	
	let btcWeeklabels = obj.btcweek.tmlabels;	
	let btcWeeklabelName = obj.btcweek.labelName;
	let bgColorRed = obj.btcday.bgColor;
	let brdColorRed = obj.btcday.brdColor;
	let btcWeekdata = obj.btcweek.tmData;

	let btcWeekChart = new Charts(btcWeeklabels, btcWeeklabelName, bgColorRed, brdColorRed, btcWeekdata);	
	btcWeekChart.chartMethod();

});






let crdbitmonth = document.querySelector('.crdbitmonth');

crdbitmonth.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {	  
			obj = xhr.response;	
			console.log(obj);
    }
  });

  xhr.send();
	
	let btcMonthlabels = obj.btcmonth.tmlabels;	
	let btcMonthlabelName = obj.btcmonth.labelName;
	let bgColorRed = obj.btcday.bgColor;
	let brdColorRed = obj.btcday.brdColor;
	let btcMonthdata = obj.btcmonth.tmData;

	let btcMonthChart = new Charts(btcMonthlabels, btcMonthlabelName, bgColorRed, brdColorRed, btcMonthdata);	
	btcMonthChart.chartMethod();

 });