
async function fetchData() {
    const res = await fetch(`http://localhost:3000/data`);
    const data = await res.json();
    return data;
  }

async function init(){
    const data = await fetchData();
    console.log(data);

    let vals = data.map(entry => entry.value);
    console.log(vals);

    let dates = data.map(entry=> new Date(entry.date).getTime());
    console.log(dates);

    let myConfig = {
        type: "line",
        scaleX: {
          values: dates,
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
          }
       },
        series: [
          { values: vals} /* Plot indices 2 and 5 are unavailable */
        ]
      }
        
    
      // Render Method[3]
      zingchart.render({
        id: 'myChart',
        data: myConfig,
      });
}
init()

