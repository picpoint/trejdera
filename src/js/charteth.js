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





let crdethweek = document.querySelector('.crdethweek');
crdethweek.addEventListener('click', () => {  
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

	let ethWeeklabels = obj.ethweek.tmlabels;	
	let ethWeeklabelName = obj.ethweek.labelName;
	let bgColorRed = obj.ethweek.bgColor;
	let brdColorRed = obj.ethweek.brdColor;
	let ethWeekdata = obj.ethweek.tmData;

	let ethWeekChart = new Charts(ethWeeklabels, ethWeeklabelName, bgColorRed, brdColorRed, ethWeekdata);	
	ethWeekChart.chartMethod();

});





let crdethmonth = document.querySelector('.crdethmonth');
crdethmonth.addEventListener('click', () => {  
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

	let ethMonthlabels = obj.ethmonth.tmlabels;	
	let ethMonthlabelName = obj.ethmonth.labelName;
	let bgColorRed = obj.ethmonth.bgColor;
	let brdColorRed = obj.ethmonth.brdColor;
	let ethMonthdata = obj.ethmonth.tmData;

	let ethMonthChart = new Charts(ethMonthlabels, ethMonthlabelName, bgColorRed, brdColorRed, ethMonthdata);	
	ethMonthChart.chartMethod();

});
