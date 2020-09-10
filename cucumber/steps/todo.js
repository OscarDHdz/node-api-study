const {Given, Then} = require('cucumber');
const axios = require('axios');
const assert = require('assert');

Given('get all endpoint is requested', async function () {

  const url = 'http://localhost:3000/api/todo';
  try {
    const response = await axios.get(url);
    const data = response.data;
    this.responseData = data;

  } catch (err) {
    throw err;
  }
  

});

Then('it should return 2 todos', async function () {
  assert.equal(this.responseData.length, 2, 'The GET All response did not return 2 elements');
});
