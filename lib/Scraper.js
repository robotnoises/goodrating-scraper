const fs = require('fs');
const Xray = require('x-ray');
const x = new Xray();

const request = (page) => {
  return new Promise((resolve, reject) => {
    x(page.url, '#offense', {
      name: ['td[data-stat="school_name"] a'],
      numplays_total: ['td[data-stat="tot_plays"]'],
      numyards_total: ['td[data-stat="tot_yds"]'],
    })((err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
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