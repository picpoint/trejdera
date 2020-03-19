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

	let rippHourlabels = obj.ripphour.tmlabels;	
	let rippHourlabelName = obj.ripphour.labelName;
	let bgColorRed = obj.ripphour.bgColor;
	let brdColorRed = obj.ripphour.brdColor;
	let rippHourdata = obj.ripphour.tmData;

	let rippHourChart = new Charts(rippHourlabels, rippHourlabelName, bgColorRed, brdColorRed, rippHourdata);	
	rippHourChart.chartMethod();

});





let crdrippday = document.querySelector('.crdrippday');
crdrippday.addEventListener('click', () => {  
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

	let rippDaylabels = obj.rippday.tmlabels;	
	let rippDaylabelName = obj.rippday.labelName;
	let bgColorRed = obj.rippday.bgColor;
	let brdColorRed = obj.rippday.brdColor;
	let rippDaydata = obj.rippday.tmData;

	let rippDayChart = new Charts(rippDaylabels, rippDaylabelName, bgColorRed, brdColorRed, rippDaydata);	
	rippDayChart.chartMethod();

});





let crdrippweek = document.querySelector('.crdrippweek');
crdrippweek.addEventListener('click', () => {  
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

	let rippWeeklabels = obj.rippweek.tmlabels;	
	let rippWeeklabelName = obj.rippweek.labelName;
	let bgColorRed = obj.rippweek.bgColor;
	let brdColorRed = obj.rippweek.brdColor;
	let rippWeekdata = obj.rippweek.tmData;

	let rippWeekChart = new Charts(rippWeeklabels, rippWeeklabelName, bgColorRed, brdColorRed, rippWeekdata);	
	rippWeekChart.chartMethod();

});





let crdrippmonth = document.querySelector('.crdrippmonth');
crdrippmonth.addEventListener('click', () => {  
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

	let rippMonthlabels = obj.rippmonth.tmlabels;	
	let rippMonthlabelName = obj.rippmonth.labelName;
	let bgColorRed = obj.rippmonth.bgColor;
	let brdColorRed = obj.rippmonth.brdColor;
	let rippMonthdata = obj.rippmonth.tmData;

	let rippMonthChart = new Charts(rippMonthlabels, rippMonthlabelName, bgColorRed, brdColorRed, rippMonthdata);	
	rippMonthChart.chartMethod();

});

