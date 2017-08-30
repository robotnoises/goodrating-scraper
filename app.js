const express = require('express');
const app = express();
const Scraper = require('./lib/Scraper');
const pages = require('./config/pages').pages;

// Let's get scrapy
const scraper = new Scraper(pages);

/**
 * Views
 */

app.get('/', (req, res) => {
  res.sendFile('./views/scraper.html', { root: __dirname });
});

/**
 * API
 */

app.post('/api/v1/scrape', (req, res) => {
  res.status(200).json({
    msg: 'OK',
  });
});

/**
 * Server
 */

app.listen(3000, () => {  
  console.log('started!');
});

/**
 * Static assets
 */

app.use('/assets/js', express.static('assets/js'));