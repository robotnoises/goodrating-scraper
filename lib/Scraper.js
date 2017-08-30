class Scraper {
  constructor(pages) {
    this.pages = pages;
  }

  go() {
    this.pages.map(page => {
      console.log(`name: ${page.name} url: ${page.url}`);
    });
  }
}

module.exports = Scraper;