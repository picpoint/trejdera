var ctx = document.getElementById('ethereumchart').getContext('2d');
let ethHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let ethHourlabelName = 'ethereum chart';
bgColorGreen = 'green';
brdColorGreen = 'green';
let ethHourdata = [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50];

let ethchart = new Charts(ethHourlabels, ethHourlabelName, bgColorGreen, brdColorGreen, ethHourdata);
ethchart.chartMethod();

