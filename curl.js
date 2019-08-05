//HTTP GET request to a given URL, and print out the HTTP response body.

const request = require('request');

module.exports = function(link, callback) {
  request(link, function (error, response, body) {
    if (error) throw error;
    callback(body)
    
    
  })

}
