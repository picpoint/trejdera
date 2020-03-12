var ctx = document.getElementById('cardanochart').getContext('2d');
let crdHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let crdHourlabelName = 'cardano chart';
bgColorGreen = 'green';
brdColorGreen = 'green';
let crdHourdata = [0, 10, 5, 50, 30, 15, 40];

let crdchart = new Charts(crdHourlabels, crdHourlabelName, bgColorGreen, brdColorGreen, crdHourdata);
crdchart.chartMethod();