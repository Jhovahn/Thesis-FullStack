'use strict';
const app = require('./app');
const db = require('../db');
const PORT = process.env.port || 3000;
const axios = require("axios")
const Stream = require('user-stream');
const Twitter = require('twitter')
const https = require("https");


const url = 
"https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(
     body
    );
  });
});




let client = new Twitter({
    consumer_key: "DV5872W8OgHFqWkvd46ID7lYe",
    consumer_secret: "w9qHuOEyQG0Ojw7hXHgGi2hR5MmM8NgHdkHK8MkKw18D42vGsI",
    access_token_key: "23155770-zAC0Q1BJAItllpfi4tE7OpDohdnP72iIY23GxhUq7",
    access_token_secret: "GkcvATMMYePZavQwTXqDzFIB9xr74rlblN8LUaswN9Ztl"
});

var params = {screen_name: "jhovahn"}

client.get('statuses/filter', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets.map(tweet));
  }
});




// let stream = new Stream({
//     consumer_key: "DV5872W8OgHFqWkvd46ID7lYe",
//     consumer_secret: "w9qHuOEyQG0Ojw7hXHgGi2hR5MmM8NgHdkHK8MkKw18D42vGsI",
//     access_token_key: "23155770-zAC0Q1BJAItllpfi4tE7OpDohdnP72iIY23GxhUq7",
//     access_token_secret: "GkcvATMMYePZavQwTXqDzFIB9xr74rlblN8LUaswN9Ztl"
// });

// var params = {
//   with: 'sentimentaal'
// }

// //create stream
// stream.stream(params);

// //listen stream data
// stream.on('data', function(json) {
//   let body = "";
//   console.log(json);
// }).on('end', function(json){
//   console.log(JSON.parse(json).text)
// }).on('error', 
//   function(json){console.log("something is wrong", json)})



// const https = require("https");
// const url = ""
// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     console.log(body)
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(
//       body
//     );
//   });
// });

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});

// axios
//   .get("https://api.twitter.com/1.1/search/tweets.json?q=%40StackOverflow")
//   .then(response => {
//     console.log(
//       response
//     );
//   })
//   .catch(error => {
//     console.log(error);
//   });