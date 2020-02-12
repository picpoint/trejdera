var ctx = document.getElementById('bitcoinchart').getContext('2d');
var chart = new Chart(ctx, {    
  type: 'line',    
  data: {
    labels: ['3', '6', '9', '12', '15', '18', '24'],
    datasets: [{
      label: 'bitcoin hours',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },    
  options: {}
});

alert('chart');