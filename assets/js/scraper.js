// Selectors

var $btn;
var $btn_loading;
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

function toggleButtons(show) {
  if (show) {
    $btn.addClass('hide');
    $btn_loading.removeClass('hide');
  } else {
    $btn.removeClass('hide');
    $btn_loading.addClass('hide');
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

  toggleButtons(false);
}

/**
 * handleScrapeError
 *
 * @param {*} response 
 */
function handleScrapeError(response) {
  console.error(response);
  toggleButtons(false);
}

// Requests

function doScrapeRequest(cb) {
  toggleButtons(true);

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
  $btn_loading = $('#loadbtn');
  $previews = $('.preview-container');
  $pre_to = $('#preview_total_offense');

  $btn.click(handleScrapeBtnClick);
}

$(document).ready(init);