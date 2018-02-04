const db = require('../')

const Tweets = db.Model.extend({
    tableName: 'tweets'
})


// var Promise = require('bluebird');

// var Tweets = bookshelf.Collection.extend({
//   model: Tweet
// });

// var tweets = Tweets.forge([
//   {tweet: 'one'},
//   {tweet: 'two'}
// ])

//     tweets.invokeThen('save').then(function() {
//   // collection models should now be saved...
// });

module.exports = Tweets



