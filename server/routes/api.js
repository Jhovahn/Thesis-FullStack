'use strict';
const express = require('express');
const router = express.Router();
const data = require('../index.js')
const Twitter = require('twitter');
const config = require('../../config/development.json')
const db = require('../../db');


// router.route('/')
//   .get((req, res) => {
//     res.status(200).send(dummyData);
    
//   })
 

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
  

  router.route('/database').get((req, res) => {
      res.send("yo")
    }
  )

  router.route('/database').get((req,res) => res.status(200).send("database response"))
      
    router.route('/')
    .get((req, res) => { 
      T.get('search/tweets', params, function(err,data,response){
        if (!err) {
          res.status(200).send(JSON.parse(response.body).statuses.map(status => status.text + `\n`))
          console.log('res:', JSON.parse(response.body).statuses.map(status => [status.text, status.created_at, status.retweet_count]))
          //console.log("database:",db)
           
         // db.Collection.insert(JSON.parse(response.body).statuses.map(status => status.text))
        //  db.seed(response.body)
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

