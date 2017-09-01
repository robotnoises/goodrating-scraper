// Selectors

var $btn_run;
var $btn_loading;
var $btn_download;
var $previews;
var $suffix;
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
    $btn_run.addClass('hide');
    $btn_loading.removeClass('hide');
  } else {
    $btn_run.removeClass('hide');
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

function handleDownload() {
  var suffix = $suffix.val();
  alert('¯\\_(ツ)_/¯');
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
  $btn_run = $('#scrapebtn');
  $btn_loading = $('#loadbtn');
  $btn_download = $('#downloadbtn');
  $previews = $('.preview-container');
  $suffix = $('#suffix');
  $pre_to = $('#preview_total_offense');

  // Register click handlers
  $btn_run.click(handleScrapeBtnClick);
  $btn_download.click(handleDownload);
}

$(document).ready(init);