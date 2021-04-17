require('dotenv').config();
const puppeteer = require('puppeteer');

async function scrape(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.thegymgroup.com/login');
    await page.type('#login-email', process.env.EMAIL);
    await page.type('#pin', process.env.PIN);
    await page.click('button[type=submit]');
    await page.waitForNavigation();
    await page.goto('https://www.thegymgroup.com/member-area/my-gym/average-usage-chart');
    

    const data = await page.evaluate(()=>{
        let elements = document.getElementsByClassName('text');
        let arr = [...elements];
        let capElement = arr.filter(element => element.innerHTML.includes('%'));
        return capElement[0].innerHTML;
    })
    //await page.screenshot({path:'stockwell.png'});
    await browser.close();
    let capacity = data.slice(0,3);
    let timeNow = new Date().toLocaleTimeString();
    console.log(capacity, timeNow);
}


const getCapacity = setInterval(scrape, 1000*15);
// put on express server and use cron job and nodemailer. Add each entry to database (lowdb)
// create a chart that displays the trend in how busy gym is. Can serve with express...