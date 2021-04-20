
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

    let dates = data.map(entry=> new Date(entry.date).getTime());
    console.log(dates);

    let myConfig = {
        type: "line",
        plot:{
          marker:{
            visible:false
          }
        },
        scaleX: {
          item: {
            fontAngle: -60,
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
          'zoom-to': [1618841404000, 1618848904000]
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
        'scroll-x': {
      },
        series: [
          { 
            values: vals,
            text: 'Capacity'
          } 
        ]
      }
        
    
      // Render Method[3]
      zingchart.render({
        id: 'myChart',
        data: myConfig,
      });
}
init()
// add code that adds null vales if time between data points is more than 30 mins

