var ctx = document.getElementById('ethereumchart').getContext('2d');
var chart = new Chart(ctx, {    
  type: 'line',    
  data: {
    labels: ['3', '6', '9', '12', '15', '18', '24'],
    datasets: [{
      label: 'ethereum chart',
      backgroundColor: 'green',
      borderColor: 'green',
      data: [40, 20, 30, 10, 50, 40, 45, 25, 40, 37, 50]
    }]
  },    
  options: {}
});



