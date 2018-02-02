const models = require('../models');

function format(arr) {
  return {tweets:arr[0]}
}


exports.seed = (knex, Promise) => {
  return knex('tweets').del()
    .then(() => {
      let records = dummyData.map(format(data));
      
      for (let i = 1; i < dummyData.length; i++) {
        records.push(format(dummyData[i]))
      }
      console.log(records)
      return Promise.all(records);
    });
};



// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('tweets').del()
//     .then(function () {
//         let records = dummyData.map(tweet => {id:null, tweets:tweet[0]})
//       return knex('tweets').insert([
//         {id:4, company_id: 5, tweets:"six"}
//         // {id: 1, colName: 'rowValue1'},
//         // {id: 2, colName: 'rowValue2'},
//         // {id: 3, colName: 'rowValu  e3'}
//       ]);
//     });
// };
