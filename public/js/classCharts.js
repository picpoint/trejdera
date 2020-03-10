// let btcHourlabels = ['3', '6', '9', '12', '15', '18', '24'];
// let btcHourlabelName = 'bitcoin chart';
// let bgColorRed = 'red';
// let brdColorRed = 'red';
// let btcHourdata = [15, 0, 20, 15, 40, 10, 50, 30, 50, 40];


// var ctx = document.getElementById('ethereumchart').getContext('2d');
// var chart = new Chart(ctx, {    
//   type: 'line',    
//   data: {
//     labels: ['3', '6', '9', '12', '15', '18', '24'],
//     datasets: [{
//       label: 'ethereum chart',
//       backgroundColor: 'green',
//       borderColor: 'green',
//       data: [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50]
//     }]
//   },    
//   options: {}
// });


class Charts {
  constructor(labels, labelName, bgColor, brdColor, data) {
    this.labels = labels;
    this.labelName = labelName;
    this.bgColor = bgColor;
    this.brdColor = brdColor;
    this.data = data;
  } 
  
  chartMethod() {
    var chart = new Chart(ctx, {    
      type: 'line',    
      data: {
        labels: this.labels,                                               // labels
        datasets: [{
          label: this.labelName,                                           // name
          backgroundColor: this.bgColor,                                   // bgcolor
          borderColor: this.brdColor,                                      // brdColor
          data: this.data                                                  // data
        }]
      },    
      options: {}
    });
  }  
} 




// var ctx = document.getElementById('bitcoinchart').getContext('2d');
// let btcchart = new Charts(btcHourlabels, btcHourlabelName, bgColorRed, brdColorRed, btcHourdata);
// btcchart.chartMethod();

//var ctxEthereum = document.getElementById('ethereumchart').getContext('2d');