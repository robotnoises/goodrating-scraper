const fs = require('fs');
const mapper = require('./mapper');
const Xray = require('x-ray');
const x = new Xray();

const request = (page) => {
  return new Promise((resolve, reject) => {
    x(page.url, page.selectors)((err, data) => {
      if (err) {
        reject(err);
      }

      resolve({ name: page.name, data: mapper.map(data) });
    });
  });
}

class Scraper {
  constructor(pages) {
    this.pages = pages;
  }

  go() {
    const requests = this.pages.map(page => request(page));
    return Promise.all(requests);
  }
}

module.exports = Scraper;