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
