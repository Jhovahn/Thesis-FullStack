'use strict';
const express = require('express');
const router = express.Router();
const data = require('../index.js')
const Twitter = require('twitter');
const config = require('../../config/development.json')
const db = require('../../db');
var bodyParser = require('body-parser')
var sentiment = require('sentiment');


const Tweet = db.Model.extend({
  tableName: 'tweets',
    profile: function() {
    return this.hasOne(Profile);
  }
});


  const T = new Twitter({
    consumer_key: config.passport.Twitter.consumerKey,
    consumer_secret: config.passport.Twitter.consumerSecret,
    access_token_key: config.passport.Twitter.access_token,
    access_token_secret: config.passport.Twitter.access_token_secret
  });
  
  console.log(config.passport.Twitter)
  
  var params = {
    q: 'germany',
    count: 100,
    result_type: 'recent',
    lang: 'en',
    since: 2017-11-11,
    retweeted: false
  }

  var scent;
  
  // router.route('/api/database').get((req,res) => res.status(200).send("database response"))
  router.route('/api/database/*').get((req,res) => res.status(200).send("database response",params.config.query))

  router.route(`/search`).get((req,res) => {
    T.get('search/tweets', {q:req.query.query, count: 100, lang: 'en'}, function(err,data,response) {
      if (!err) {
        let sentimentNumber = JSON.parse(response.body).statuses.map(status => sentiment(status.text)).map(score => score.score).reduce((a,b) => a + b)/100
        scent = sentimentNumber
        console.log("Sentiment Average:",sentimentNumber)
        res.status(200).send(JSON.parse(response.body).statuses.map(status => [`${status.text}`, `${status.created_at}`, `${status.id}`, `${req.query.query}`, sentimentNumber]));
        res.send(sentimentNumber)
        console.log(JSON.parse(response.body).statuses.map(status => [status.text, status.created_at, status.id, req.query.query]))
        let me = req.query.query
        JSON.parse(response.body).statuses.map(status => new Tweet({tweets:status.text}, {created_at:status.created_at}, {term:me}).save().then(function(model){}))
        console.log("Total Sentiment:",JSON.parse(response.body).statuses.map(status => sentiment(status.text)).map(score => score.score).reduce((a,b) => a + b))
      } else {
        console.log('error')
      }
    })
  })
  
  router.route('/')
    .get((req, res) => { 
      T.get('search/tweets', params, function(err,data,response){
        if (!err) {
          res.status(200).send(JSON.parse(response.body).statuses.map(status => status.text + `\n`))
          JSON.parse(response.body).statuses.map(status => new Tweet({tweets:status.text}).save().then(function(model) {
          }))
        } else {
          console.log('error',err)
        }
      })
    })
    .post((req, res) => {
      console.log('in the correct route');
      res.status(201).send({ data: 'Posted!' });
    })
     

  // T.get('search/tweets', params, function(err,data,response){
  //   if (!err) {
  //     console.log('res', JSON.parse(response.body).statuses.map(status => [status.text, status.created_at, status.retweet_count]))
  //   } else {
  //     console.log('error',err)
  //   }
  // })
 
module.exports = router;

