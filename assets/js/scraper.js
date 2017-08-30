// Globals

var $btn;
var idle = true;

// Respnse Handlers

/**
 * handleScrapeResponse
 *
 * @param {*} response 
 */
function handleScrapeResponse(response) {
  if (response.msg === 'OK') {
    idle = true;
    console.log(response);
  }
}

/**
 * handleScrapeError
 *
 * @param {*} response 
 */
function handleScrapeError(response) {
  console.error(response);
}

// Requests

function doScrapeRequest(cb) {
  $.post('/api/v1/scrape')
    .done(handleScrapeResponse)
    .fail(handleScrapeError);
}

// Click Handlers

 /**
  * handleScrapeBtnClick
  *
  */
function handleScrapeBtnClick($event) {
  if (idle) {
    idle = false;
    doScrapeRequest(handleScrapeResponse);
  }
}

/**
 * Init
 */

function init() {
  $btn = $('#scrapebtn');
  $btn.click(handleScrapeBtnClick);
}

$(document).ready(init);