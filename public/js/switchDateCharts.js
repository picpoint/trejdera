
// let crdbitday = document.querySelector('.crdbitday');
// let obj;
// let url = 'https://raw.githubusercontent.com/picpoint/trejdera/master/datasCharts.json';



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


// class MakeRequest {
// 	constructor(btn, canvasId, blockTimelabels, blockTimelabelName, bgColorRed, brdColorRed, blockTimedata, blockTimeChart, blockTimeAjax) {
// 		this.btn = btn;
// 		this.canvasId = canvasId;
// 		this.blockTimelabels = blockTimelabels;
// 		this.blockTimelabelName = blockTimelabelName;
// 		this.bgColorRed = bgColorRed;
// 		this.brdColorRed = brdColorRed;
// 		this.blockTimedata = blockTimedata,
// 		this.blockTimeChart = blockTimeChart;
// 		this.blockTimeAjax = blockTimeAjax;
// 	}

	
// 	ajaxRequestMethod() {
// 		this.btn.addEventListener('click', () => {  
// 			let xhr = new XMLHttpRequest();		
// 			xhr.responseType = 'json';
// 			xhr.open('GET', url);
// 			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// 			xhr.addEventListener('readystatechange', () => {
// 				if(xhr.readyState == 4 && xhr.status == 200) {	  
// 					obj = xhr.response;	
// 				}
// 			});

// 			xhr.send();

// 			var ctx = document.getElementById(this.canvasId).getContext('2d');

// 			this.blockTimelabels = obj.this.blockTimeAjax.tmlabels;
// 			this.blockTimelabelName = obj.this.blockTimeAjax.labelName;
			
// 			console.log(this.blockTimelabels);
// 			console.log(this.blockTimelabelName);



// 			// let btcDaylabels = obj.btcday.daylabels;	
// 			// let btcDaylabelName = obj.btcday.labelName;
// 			// let bgColorRed = obj.btcday.bgColor;
// 			// let brdColorRed = obj.btcday.brdColor;
// 			// let btcDaydata = obj.btcday.dayData;
// 			let btcDayChart = new Charts(btcDaylabels, btcDaylabelName, bgColorRed, brdColorRed, btcDaydata);	
// 			btcDayChart.chartMethod();
// 		});

// 	}


// }

// let bitcoin = new MakeRequest(crdbitday, 'bitcoinchart');
// bitcoin.ajaxRequestMethod();

 //----------------------------------


// let crdbitday = document.querySelector('.crdbitday');
// let obj;

// crdbitday.addEventListener('click', () => {  
//   let xhr = new XMLHttpRequest();
//   let url = 'https://raw.githubusercontent.com/picpoint/trejdera/master/datasCharts.json';
//   xhr.responseType = 'json';
//   xhr.open('GET', url);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   xhr.addEventListener('readystatechange', () => {
//     if(xhr.readyState == 4 && xhr.status == 200) {	  
// 			obj = xhr.response;	
// 			console.log(obj);
//     }
//   });

//   xhr.send();

// 	var ctx = document.getElementById('bitcoinchart').getContext('2d');

// 	let btcDaylabels = obj.btcday.tmlabels;	
// 	let btcDaylabelName = obj.btcday.labelName;
// 	let bgColorRed = obj.btcday.bgColor;
// 	let brdColorRed = obj.btcday.brdColor;
// 	let btcDaydata = obj.btcday.tmData;

// 	let btcDayChart = new Charts(btcDaylabels, btcDaylabelName, bgColorRed, brdColorRed, btcDaydata);	
// 	btcDayChart.chartMethod();

//  });
