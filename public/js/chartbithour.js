var ctx = document.getElementById('bitcoinchart').getContext('2d');
let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let btcHourlabelName = 'bitcoin chart';
let bgColorRed = 'red';
let brdColorRed = 'red';
let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];

let btcchart = new Charts(btcHourlabels, btcHourlabelName, bgColorRed, brdColorRed, btcHourdata);
btcchart.chartMethod();