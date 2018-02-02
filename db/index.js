const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);

db.plugin('registry');



// db.Collection.insert = function () {
//     return Promise
//       .bind(this)
//       .then(function (models) {
//         return knex.insert(this.toJSON({shallow: true})).into(this.tweets()).returning(this.idAttribute());
//       })
//       .map(function (id, index) {
//         this.at(index).set(this.idAttribute(), id);
//       })
//       .return(this);
//     };

//     console.log(db.insert)

module.exports = db;

