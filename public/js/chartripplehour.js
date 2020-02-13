var ctx = document.getElementById('ripplechart').getContext('2d');
var chart = new Chart(ctx, {    
  type: 'line',    
  data: {
    labels: ['3', '6', '9', '12', '15', '18', '24'],
    datasets: [{
      label: 'ripple chart',
      backgroundColor: 'green',
      borderColor: 'green',
      data: [10, 5, 15, 0, 5, 45, 50]
    }]
  },    
  options: {}
});



