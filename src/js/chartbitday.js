let crdbitday = document.querySelector('.crdbitday');

crdbitday.addEventListener('click', () => {
  var ctx = document.getElementById('bitcoinchart').getContext('2d');
  let btcDaylabels = ['5', '10', '15', '20', '25', '30'];
  let btcDaylabelName = 'bitcoin chart';
  // let bgColorRed = 'red';
  // let brdColorRed = 'red';
  let btcDaydata = [7, 10, 3, 15, 40, 23];

  let btcDaychart = new Charts(btcDaylabels, btcDaylabelName, bgColorRed, brdColorRed, btcDaydata);
  btcDaychart.chartMethod();
});

