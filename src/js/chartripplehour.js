var ctx = document.getElementById('ripplechart').getContext('2d');
let rippHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
let rippHourlabelName = 'ripple chart';
let bgColorGreenRippHour = 'green';
let brdColorGreenRippHour = 'green';
let rippHourdata = [10, 5, 15, 0, 5, 45, 50];

let rippchart = new Charts(rippHourlabels, rippHourlabelName, bgColorGreenRippHour, brdColorGreenRippHour, rippHourdata);
rippchart.chartMethod();