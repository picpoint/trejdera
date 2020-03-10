var ctx = document.getElementById('ripplechart').getContext('2d');
let rippHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let rippHourlabelName = 'bitcoin chart';
let rippHourdata = [10, 5, 15, 0, 5, 45, 50];

let rippchart = new Charts(rippHourlabels, rippHourlabelName, bgColorGreen, brdColorGreen, rippHourdata);
rippchart.chartMethod();