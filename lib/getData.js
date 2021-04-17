import db from './db.js'; 

function getData(){
    return db.get('capacities').value();
}


export default getData;