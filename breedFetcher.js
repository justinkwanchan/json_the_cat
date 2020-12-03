const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(url, (error, response, body) => {
  if (error) {
    console.log('An error occured:', error); // Print the error if one occurred
  } else if (response.statusCode !== 200) {
    console.log('An error occured - code:', response && response.statusCode); // Print the response status code if a response was received
  } else {
    console.log(`Body type: ${typeof body}\n`, JSON.parse(body));
  }
});