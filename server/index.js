'use strict';
const app = require('./app');
const db = require('../db');
const PORT = process.env.port || 3000;
const axios = require("axios")
const Stream = require('user-stream');
const https = require("https");
const Twitter = require('twitter');
const config = require('../config/development.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const T = new Twitter({
  consumer_key: config.passport.Twitter.consumerKey,
  consumer_secret: config.passport.Twitter.consumerSecret,
  access_token_key: config.passport.Twitter.access_token,
  access_token_secret: config.passport.Twitter.access_token_secret
});

console.log(config.passport.Twitter)

var me = []

var params = {
  q: 'monsterenergy',
  count: 100,
  result_type: 'recent',
  lang: 'en',
  since: 2017-11-11}

T.get('search/tweets', params, function(err,data,response){
  if (!err) {
    console.log(db)
    console.log('res', JSON.parse(response.body).statuses.map(status => [status.text, status.created_at, status.retweet_count]))
    me.push(JSON.parse(response.body).statuses.map(status => [status.text, status.created_at, status.retweet_count]))
   
  } else {
    console.log('error',err)
  }
})


app.get('/rando', (request, response) => {
  console.log("server side",request)
  res.send('got it :)')
});


app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});


