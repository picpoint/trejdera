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

	let cardHourlabels = obj.cardanohour.tmlabels;	
	let cardHourlabelName = obj.cardanohour.labelName;
	let bgColorRed = obj.cardanohour.bgColor;
	let brdColorRed = obj.cardanohour.brdColor;
	let cardHourdata = obj.cardanohour.tmData;

	let cardHourChart = new Charts(cardHourlabels, cardHourlabelName, bgColorRed, brdColorRed, cardHourdata);	
	cardHourChart.chartMethod();

});




let crdcardanoday = document.querySelector('.crdcardanoday');
crdcardanoday.addEventListener('click', () => {  
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

	let cardDaylabels = obj.cardanoday.tmlabels;	
	let cardDaylabelName = obj.cardanoday.labelName;
	let bgColorRed = obj.cardanoday.bgColor;
	let brdColorRed = obj.cardanoday.brdColor;
	let cardDaydata = obj.cardanoday.tmData;

	let cardDayChart = new Charts(cardDaylabels, cardDaylabelName, bgColorRed, brdColorRed, cardDaydata);	
	cardDayChart.chartMethod();

});





let crdcardanoweek = document.querySelector('.crdcardanoweek');
crdcardanoweek.addEventListener('click', () => {  
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

	let cardWeeklabels = obj.cardanoweek.tmlabels;	
	let cardWeeklabelName = obj.cardanoweek.labelName;
	let bgColorRed = obj.cardanoweek.bgColor;
	let brdColorRed = obj.cardanoweek.brdColor;
	let cardWeekdata = obj.cardanoweek.tmData;

	let cardWeekChart = new Charts(cardWeeklabels, cardWeeklabelName, bgColorRed, brdColorRed, cardWeekdata);	
	cardWeekChart.chartMethod();

});





let crdcardanomonth = document.querySelector('.crdcardanomonth');
crdcardanomonth.addEventListener('click', () => {  
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

	let cardMonthlabels = obj.cardanomonth.tmlabels;	
	let cardMonthlabelName = obj.cardanomonth.labelName;
	let bgColorRed = obj.cardanomonth.bgColor;
	let brdColorRed = obj.cardanomonth.brdColor;
	let cardMonthdata = obj.cardanomonth.tmData;

	let cardMonthChart = new Charts(cardMonthlabels, cardMonthlabelName, bgColorRed, brdColorRed, cardMonthdata);	
	cardMonthChart.chartMethod();

});