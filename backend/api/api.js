const newLink = require('./methods/newLink'),
      fetchLink = require('./methods/fetchLink'),
      linkStats = require('./methods/linkStats');

const api = Object.assign({}, newLink, fetchLink, linkStats);

module.exports = api;