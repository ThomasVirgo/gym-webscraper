const capacityHeader = document.getElementById('capacity');

async function fetchData() {
    const res = await fetch(`http://localhost:3000/data`);
    const data = await res.json();
    return data;
  }

async function init(){
    const data = await fetchData();
    console.log(data);

    let vals = data.map(entry => [new Date(entry.date).getTime(), entry.value]);
    console.log(vals);

    let currentCapacity = vals[vals.length-1][1];

    capacityHeader.innerHTML = `Current Capacity: ${String(currentCapacity)}%`;
    capacityHeader.style.color = currentCapacity<60?'green':'red';

    let dates = data.map(entry=> new Date(entry.date).getTime());
    console.log(dates);

    let myConfig = {
        type: "area",
        'scroll-x': {

        },
        preview: {

        },
        plot:{
          marker:{
            visible:false
          }
        },
        scaleX: {
          item: {
            //fontAngle: -60,
            fontColor: '#9a9cab',
            fontFamily: 'Arial',
            fontSize: '10px',
            offsetX: '5px'
          },
          transform: {  
             type: 'date',  
             all: '%D %H:%i'  
          },
          guide: {
            alpha: 1,
            lineStyle: 'solid',
            visible: true
          },
          zooming: true,
          'zoom-to': [1618841404000, 1618842404000],
       },
       tooltip: {
         visible:false
       },
       crosshairX: {
        lineColor: '#a9a9a9',
        marker:{
          type:"circle",
          size: 5
        },
        plotLabel: {
          padding: '10px',
          borderColor: '#f6f7f8',
          borderRadius: '5px',
          borderWidth: '1px',
          fontWeight: 'bold'
        },
        scaleLabel: {
          backgroundColor: '#f6f7f8',
          borderRadius: '5px',
          fontColor: '#00baf0'
        }
      },
        series: [
          { 
            values: vals,
            text: 'Capacity'
          } 
        ]
      }
        
    
      zingchart.render({
        id: 'myChart',
        data: myConfig,
      });
}
init()
// add code that adds null vales if time between data points is more than 30 mins

