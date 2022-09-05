const data = {
    labels: [   'January',       'February',    'March'  ],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5],
     
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
   
  };


var  results=await fetch("veri.json")

elel=await results.json();
var adana=[]
elel["BOTAŞ"].forEach((eleman, index)=>{

if(index>5) return
else adana.push(eleman["2014"].replace('INR','').replace(/,/g,''))
}) 
console.log(  adana)
console.log(  elel)
const myChart = new Chart(document.getElementById('myChart'), config );

var aee=["10","2","10"]
var aed=[5,1,5]
myChart.data.datasets[0].data=adana
myChart.data.labels=adana
myChart.update();