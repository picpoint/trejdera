var ctx = document.getElementById('bitcoinchart').getContext('2d');
var chart = new Chart(ctx, {    
  type: 'line',    
  data: {
    labels: ['3', '6', '9', '12', '15', '18', '24'],
    datasets: [{
      label: 'bitcoin chart',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [15, 0, 20, 15, 40, 10, 50, 30, 50, 40]
    }]
  },    
  options: {}
});



