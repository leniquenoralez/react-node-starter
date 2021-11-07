"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongodb = require("mongodb");

const DB_URI = 'mongodb://localhost:27017/';

const connected = (err, client) => {
  if (err) {
    throw err;
  }

  console.log(`DATABASE CONNECTED: ${DB_URI}`);
};

const DB = {
  connect: () => {
    _mongodb.MongoClient.connect(DB_URI, {
      useUnifiedTopology: true
    }, connected);
  }
};
var _default = DB;
exports.default = _default;