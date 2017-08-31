class Response {
  constructor(statusCode, statusMessage, data) {
    this.status = statusCode;
    this.msg = statusMessage;
    this.data = data;
  }
}

module.exports = Response;
