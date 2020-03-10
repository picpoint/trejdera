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
        labels: this.labels,
        datasets: [{
          label: this.labelName,
          backgroundColor: this.bgColor,
          borderColor: this.brdColor,
          data: this.data
        }]
      },
      options: {}
    });
  }  
  
} 
