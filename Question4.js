// Importing fetch module to access API
const fetch = require('node-fetch');
// Creating URL
const URL = 'www.example.com/api/get/1';
// Fetching data from URL.
fetch(URL)
.then(data => data.json())
.then((json) => {
    console.log(JSON.stringify(json));
})