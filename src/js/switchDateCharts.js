let url = 'https://raw.githubusercontent.com/picpoint/trejdera/master/datasCharts.json';        // url json файлы
let obj;                                                                                        // переменная в которую будет помещаться ответ запроса
let crdbithour = document.querySelector('.crdbithour');
let crdbitday = document.querySelector('.crdbitday');
let crdbitweek = document.querySelector('.crdbitweek');
let crdbitmonth = document.querySelector('.crdbitmonth');
let crdethhour = document.querySelector('.crdethhour');
let crdethday = document.querySelector('.crdethday');
let crdethweek = document.querySelector('.crdethweek');
let crdethmonth = document.querySelector('.crdethmonth');
let crdripphour = document.querySelector('.crdripphour');
let crdrippday = document.querySelector('.crdrippday');
let crdrippweek = document.querySelector('.crdrippweek');
let crdrippmonth = document.querySelector('.crdrippmonth');
let crdcardanohour = document.querySelector('.crdcardanohour');
let crdcardanoday = document.querySelector('.crdcardanoday');
let crdcardanoweek = document.querySelector('.crdcardanoweek');
let crdcardanomonth = document.querySelector('.crdcardanomonth');



var ctx = document.getElementById('bitcoinchart').getContext('2d');                             // канвас отрисовки графика
let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];                                    
let btcHourlabelName = 'bitcoin chart';
let bgColorRedChartHour = 'red';
let brdColorRedChartHour = 'red';
let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];
let btccharthour = new Charts(btcHourlabels, btcHourlabelName, bgColorRedChartHour, brdColorRedChartHour, btcHourdata);
btccharthour.chartMethod();  



var ctx = document.getElementById('ethereumchart').getContext('2d'); 
let ethHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let ethHourlabelName = 'ethereum chart';
let bgColorGreenEthHour = 'green';
let brdColorGreenEthHour = 'green';
let ethHourdata = [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50];
let ethcharthour = new Charts(ethHourlabels, ethHourlabelName, bgColorGreenEthHour, brdColorGreenEthHour, ethHourdata);
ethcharthour.chartMethod();



var ctx = document.getElementById('ripplechart').getContext('2d');
let rippHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let rippHourlabelName = 'ripple chart';
let bgColorGreenRippHour = 'green';
let brdColorGreenRippHour = 'green';
let rippHourdata = [10, 5, 15, 0, 5, 45, 50];
let rippcharthour = new Charts(rippHourlabels, rippHourlabelName, bgColorGreenRippHour, brdColorGreenRippHour, rippHourdata);
rippcharthour.chartMethod();



var ctx = document.getElementById('cardanochart').getContext('2d');
let crdHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let crdHourlabelName = 'cardano chart';
let bgColorGreenCardanoHour = 'green';
let brdColorGreenCardanoHour = 'green';
let crdHourdata = [0, 10, 5, 50, 30, 15, 40];
let crdchart = new Charts(crdHourlabels, crdHourlabelName, bgColorGreenCardanoHour, brdColorGreenCardanoHour, crdHourdata);
crdchart.chartMethod();


// /*
// 	btn - кнопка по которой кликают
// 	canvasId - канвас в котором будет отрисовываться график
// 	blockTimelabels - временная шкала графика
// 	blockTimelabelName - имя метки на графике
// 	bgColorRed - красный цвет фона
// 	brdColorRed - цвет рамки
// 	blockTimedata - данные для отрисовки графика
// 	blockTimeChart - переменная в которую передаётся класс Charts и которая потом вызывает chartMethod для отрисовки графика
// 		- на основании всех данных
// 	blockTimeAjax - блок btcday/btcweek или другой содержащий блок с данными 	

// */


class MakeRequest {
	constructor(btn, canvasId, jsonblock) {
		this.btn = btn;
    this.canvasId = canvasId;    
    this.jsonblock = jsonblock;
	}

	
	ajaxRequestMethod() {
    let jsb, blockTimelabels, blockTimelabelName, bgColorRed, brdColorRed, blockTimedata;

		this.btn.addEventListener('click', () => {  
			let xhr = new XMLHttpRequest();		
			xhr.responseType = 'json';
			xhr.open('GET', url);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			xhr.addEventListener('readystatechange', () => {
				if(xhr.readyState == 4 && xhr.status == 200) {	  
          obj = xhr.response;	          
          jsb = this.jsonblock;          
				}
			});

			xhr.send();

      var ctx = document.getElementById(this.canvasId).getContext('2d');
      
      if(jsb == 'btchour') {
        blockTimelabels = obj.btchour.tmlabels;
        blockTimelabelName = obj.btchour.labelName;
        bgColorRed = obj.btchour.bgColor;
        brdColorRed = obj.btchour.brdColor;
        blockTimedata = obj.btchour.tmData;      
      } 

      if(jsb == 'btcday') {
        blockTimelabels = obj.btcday.tmlabels;
        blockTimelabelName = obj.btcday.labelName;
        bgColorRed = obj.btcday.bgColor;
        brdColorRed = obj.btcday.brdColor;
        blockTimedata = obj.btcday.tmData;      
      }

      if(jsb == 'btcweek') {
        blockTimelabels = obj.btcweek.tmlabels;
        blockTimelabelName = obj.btcweek.labelName;
        bgColorRed = obj.btcweek.bgColor;
        brdColorRed = obj.btcweek.brdColor;
        blockTimedata = obj.btcweek.tmData;      
      }

      if(jsb == 'btcmonth') {
        blockTimelabels = obj.btcmonth.tmlabels;
        blockTimelabelName = obj.btcmonth.labelName;
        bgColorRed = obj.btcmonth.bgColor;
        brdColorRed = obj.btcmonth.brdColor;
        blockTimedata = obj.btcmonth.tmData;      
      }

      if(jsb == 'ethhour') {
        blockTimelabels = obj.ethhour.tmlabels;
        blockTimelabelName = obj.ethhour.labelName;
        bgColorRed = obj.ethhour.bgColor;
        brdColorRed = obj.ethhour.brdColor;
        blockTimedata = obj.ethhour.tmData;      
      }

      if(jsb == 'ethday') {
        blockTimelabels = obj.ethday.tmlabels;
        blockTimelabelName = obj.ethday.labelName;
        bgColorRed = obj.ethday.bgColor;
        brdColorRed = obj.ethday.brdColor;
        blockTimedata = obj.ethday.tmData;      
      }

      if(jsb == 'ethweek') {
        blockTimelabels = obj.ethweek.tmlabels;
        blockTimelabelName = obj.ethweek.labelName;
        bgColorRed = obj.ethweek.bgColor;
        brdColorRed = obj.ethweek.brdColor;
        blockTimedata = obj.ethweek.tmData;      
      }

      if(jsb == 'ethmonth') {
        blockTimelabels = obj.ethmonth.tmlabels;
        blockTimelabelName = obj.ethmonth.labelName;
        bgColorRed = obj.ethmonth.bgColor;
        brdColorRed = obj.ethmonth.brdColor;
        blockTimedata = obj.ethmonth.tmData;      
      }

      if(jsb == 'ripphour') {
        blockTimelabels = obj.ripphour.tmlabels;
        blockTimelabelName = obj.ripphour.labelName;
        bgColorRed = obj.ripphour.bgColor;
        brdColorRed = obj.ripphour.brdColor;
        blockTimedata = obj.ripphour.tmData;      
      }

      if(jsb == 'rippday') {
        blockTimelabels = obj.rippday.tmlabels;
        blockTimelabelName = obj.rippday.labelName;
        bgColorRed = obj.rippday.bgColor;
        brdColorRed = obj.rippday.brdColor;
        blockTimedata = obj.rippday.tmData;      
      }

      if(jsb == 'rippweek') {
        blockTimelabels = obj.rippweek.tmlabels;
        blockTimelabelName = obj.rippweek.labelName;
        bgColorRed = obj.rippweek.bgColor;
        brdColorRed = obj.rippweek.brdColor;
        blockTimedata = obj.rippweek.tmData;      
      }

      if(jsb == 'rippmonth') {
        blockTimelabels = obj.rippmonth.tmlabels;
        blockTimelabelName = obj.rippmonth.labelName;
        bgColorRed = obj.rippmonth.bgColor;
        brdColorRed = obj.rippmonth.brdColor;
        blockTimedata = obj.rippmonth.tmData;      
      }

      if(jsb == 'cardanohour') {
        blockTimelabels = obj.cardanohour.tmlabels;
        blockTimelabelName = obj.cardanohour.labelName;
        bgColorRed = obj.cardanohour.bgColor;
        brdColorRed = obj.cardanohour.brdColor;
        blockTimedata = obj.cardanohour.tmData;      
      }

      if(jsb == 'cardanoday') {
        blockTimelabels = obj.cardanoday.tmlabels;
        blockTimelabelName = obj.cardanoday.labelName;
        bgColorRed = obj.cardanoday.bgColor;
        brdColorRed = obj.cardanoday.brdColor;
        blockTimedata = obj.cardanoday.tmData;      
      }

      if(jsb == 'crdcardanoweek') {
        blockTimelabels = obj.cardanoweek.tmlabels;
        blockTimelabelName = obj.cardanoweek.labelName;
        bgColorRed = obj.cardanoweek.bgColor;
        brdColorRed = obj.cardanoweek.brdColor;
        blockTimedata = obj.cardanoweek.tmData;      
      }

      if(jsb == 'crdcardanomonth') {
        blockTimelabels = obj.cardanomonth.tmlabels;
        blockTimelabelName = obj.cardanomonth.labelName;
        bgColorRed = obj.cardanomonth.bgColor;
        brdColorRed = obj.cardanomonth.brdColor;
        blockTimedata = obj.cardanomonth.tmData;      
      }
      

			let blockTimeChart = new Charts(blockTimelabels, blockTimelabelName, bgColorRed, brdColorRed, blockTimedata);	
			blockTimeChart.chartMethod();
		});

	}

}


let bitcoinHour = new MakeRequest(crdbithour, 'bitcoinchart', 'btchour');
bitcoinHour.ajaxRequestMethod();


let bitcoinDay = new MakeRequest(crdbitday, 'bitcoinchart', 'btcday');
bitcoinDay.ajaxRequestMethod();


let bitcoinWeek = new MakeRequest(crdbitweek, 'bitcoinchart', 'btcweek');
bitcoinWeek.ajaxRequestMethod();


let bitcoinMonth = new MakeRequest(crdbitmonth, 'bitcoinchart', 'btcmonth');
bitcoinMonth.ajaxRequestMethod();
 



let crdethHour = new MakeRequest(crdethhour, 'ethereumchart', 'ethhour');
crdethHour.ajaxRequestMethod();

let crdethDay = new MakeRequest(crdethday, 'ethereumchart', 'ethday');
crdethDay.ajaxRequestMethod();

let crdethWeek = new MakeRequest(crdethweek, 'ethereumchart', 'ethweek');
crdethWeek.ajaxRequestMethod();

let crdethMonth = new MakeRequest(crdethmonth, 'ethereumchart', 'ethmonth');
crdethMonth.ajaxRequestMethod();




let crdrippHour = new MakeRequest(crdripphour, 'ripplechart', 'ripphour');
crdrippHour.ajaxRequestMethod();

let crdrippDay = new MakeRequest(crdrippday, 'ripplechart', 'rippday');
crdrippDay.ajaxRequestMethod();

let crdrippWeek = new MakeRequest(crdrippweek, 'ripplechart', 'rippweek');
crdrippWeek.ajaxRequestMethod();

let crdrippMonth = new MakeRequest(crdrippmonth, 'ripplechart', 'rippmonth');
crdrippMonth.ajaxRequestMethod();



let crdcardanoHour = new MakeRequest(crdcardanohour, 'cardanochart', 'cardanohour');
crdcardanoHour.ajaxRequestMethod();

let crdcardanoDay = new MakeRequest(crdcardanoday, 'cardanochart', 'cardanoday');
crdcardanoDay.ajaxRequestMethod();

let crdcardanoWeek = new MakeRequest(crdcardanoweek, 'cardanochart', 'crdcardanoweek');
crdcardanoWeek.ajaxRequestMethod();

let crdcardanoMonth = new MakeRequest(crdcardanomonth, 'cardanochart', 'crdcardanomonth');
crdcardanoMonth.ajaxRequestMethod();