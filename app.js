const express = require('express');
const app = express();
const pages = require('./config/pages').pages;
const Scraper = require('./lib/Scraper');
const filesystem = require('./lib/filesystem');
const Response = require('./models/Response');
const WriteFile = require('./models/WriteFile');

// Let's get scrapey
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
  scraper.go()
    .then(result => {
      return Promise.all([
        result,
        filesystem.writeFiles(result.map(r => new WriteFile(r.name, r.data)))
      ])
    })
    .then(result => {
      res.status(200).json(new Response(200, 'OK', result[0]));
    })
    .catch(err => {
      res.status(503).json(err);
    });
});

/**
 * Server
 */

app.listen(8888, () => {  
  console.log('started!');
});

/**
 * Static assets
 */

app.use('/assets/js', express.static('assets/js'));
app.use('/assets/img', express.static('assets/img'));
app.use('/assets/style', express.static('assets/style'));