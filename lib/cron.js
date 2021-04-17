import cron from 'node-cron';
import scrape from './scraper.js';

cron.schedule('* * * * *', () => {
  console.log('Running cron job.');
  scrape();
});

//'*/5 * * * *'