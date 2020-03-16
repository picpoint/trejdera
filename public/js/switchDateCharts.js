let crdbitday = document.querySelector('.crdbitday');
let obj = {};

crdbitday.addEventListener('click', () => {  
  let xhr = new XMLHttpRequest();
  let url = 'https://raw.githubusercontent.com/picpoint/trejdera/master/datasCharts.json';
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      obj = xhr.response.btcday;
      //console.log(obj);
    }
  });

  xhr.send();

	var ctx = document.getElementById('bitcoinchart').getContext('2d');
	
	let btcDaylabels = obj.daylabels;	
	let btcDaylabelName = obj.labelName;
	let bgColorRed = obj.bgColor;
	let brdColorRed = obj.brdColor;
	let btcDaydata = obj.dayData;
	console.log('-----------------');
	console.log(btcDaylabels);
	console.log(btcDaylabelName);
	console.log(bgColorRed);
	console.log(brdColorRed);
	console.log(btcDaydata);
	console.log('-----------------');

	let btcDayChart = new Charts(btcDaylabels, btcDaylabelName, bgColorRed, brdColorRed, btcDaydata);	
	btcDayChart.chartMethod();

});
