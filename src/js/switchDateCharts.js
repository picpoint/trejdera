var ctx = document.getElementById('bitcoinchart').getContext('2d');                             // канвас отрисовки графика
let url = 'https://raw.githubusercontent.com/picpoint/trejdera/master/datasCharts.json';        // url json файлы
let obj;                                                                                        // переменная в которую будет помещаться ответ запроса
let crdbitday = document.querySelector('.crdbitday');



let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];                                    
let btcHourlabelName = 'bitcoin chart';
let bgColorRedChartHour = 'red';
let brdColorRedChartHour = 'red';
let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];

let btccharthour = new Charts(btcHourlabels, btcHourlabelName, bgColorRedChartHour, brdColorRedChartHour, btcHourdata);
btccharthour.chartMethod();  





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
	constructor(btn, canvasId) {
		this.btn = btn;
    this.canvasId = canvasId;    
	}

	
	ajaxRequestMethod() {
		this.btn.addEventListener('click', () => {  
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

      var ctx = document.getElementById(this.canvasId).getContext('2d');
      
      let blockTimelabels = obj.btcday.tmlabels;
      let blockTimelabelName = obj.btcday.labelName;
      let bgColorRed = obj.btcday.bgColor;
      let brdColorRed = obj.btcday.brdColor;
      let blockTimedata = obj.btcday.tmData;      

			let blockTimeChart = new Charts(blockTimelabels, blockTimelabelName, bgColorRed, brdColorRed, blockTimedata);	
			blockTimeChart.chartMethod();
		});

	}

}


let bitcoinDay = new MakeRequest(crdbitday, 'bitcoinchart');
bitcoinDay.ajaxRequestMethod();

 