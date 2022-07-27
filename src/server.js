// Polyfill Web APIs like `fetch` and `ReadableStream`
require('@shopify/hydrogen/web-polyfills');

const fs = require('fs');
const handleRequest = require('./dist/node');

const indexTemplate = fs.readFileSync('./dist/client/index.html', 'utf-8');

module.exports = function (request, response) {
  handleRequest(request, {
    indexTemplate,
    streamableResponse: response,
  });
};
