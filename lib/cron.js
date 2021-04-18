import cron from 'node-cron';
import scrape from './scraper.js';

cron.schedule('*/5 * * * *', () => {
  console.log('Running cron job.');
  scrape();
});

//'*/5 * * * *'