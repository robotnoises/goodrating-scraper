class Page {
  constructor(name, url, selectors, paginate) {
    this.name = name;
    this.url = url;
    this.selectors = selectors;
    this.paginate = paginate || null;
  }
}

module.exports = Page;
