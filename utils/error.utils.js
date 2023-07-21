// utils/error.utils.js

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = {
  ServerError,
  BadRequestError,
  ConflictError,
};
