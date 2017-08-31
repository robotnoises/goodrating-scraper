// Selectors

var $btn;
var $previews;
var $pre_to;

// Flags

var idle = true;

// Utils

function togglePreviews(show) {
  if (show) {
    $previews.removeClass('hide');
  } else {
    $previews.addClass('hide');
  }
}

// Respnse Handlers

/**
 * handleScrapeResponse
 *
 * @param {*} response 
 */
function handleScrapeResponse(response) {
  if (response.msg === 'OK') {
    idle = true;
    $pre_to.text(JSON.stringify(response.data, null, 2));
    togglePreviews(true);
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
  $previews = $('.preview-container');
  $pre_to = $('#preview_total_offense');

  $btn.click(handleScrapeBtnClick);
}

$(document).ready(init);