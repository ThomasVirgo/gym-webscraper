//setup the database
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js'

 
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ capacities: []}).write();

//add an entry
// let x = new Date();
// let date = x.toString('en-GB', { timeZone: 'Europe/London' });
// db.get('capacities').push({value:55, date}).write();
// let capacities = db.get('capacity').value();
// console.log(capacities);
export default db;


