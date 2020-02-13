var ctx = document.getElementById('cardanochart').getContext('2d');
var chart = new Chart(ctx, {    
  type: 'line',    
  data: {
    labels: ['3', '6', '9', '12', '15', '18', '24'],
    datasets: [{
      label: 'cardano chart',
      backgroundColor: 'green',
      borderColor: 'green',
      data: [0, 10, 5, 50, 30, 15, 40]
    }]
  },    
  options: {}
});



