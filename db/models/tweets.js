const db = require('../')

const Tweets = db.Model.extend({
    tableName: 'tweets'
})

module.exports = db.model('tweets', tweets)



