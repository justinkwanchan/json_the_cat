const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (Object.keys(data).length !== 0) {
      callback(error, data[0].description);
    } else {
      callback('Breed name is not found.');
    }
  });
};

module.exports = { fetchBreedDescription };


// OLD CODE BEFORE SEPARATING MODULES
// if (error) {
//   console.log('An error occured:', error); // Print the error if one occurred
// } else if (response.statusCode !== 200) {
//   console.log('An error occured - code:', response && response.statusCode); // Print the response status code if a response was received
// } else {
//   const data = JSON.parse(body);
//   if (Object.keys(data).length !== 0) {
//     console.log(data[0].description);
//   } else {
//     console.log('Error: Breed name is not found.');
//   }
// }