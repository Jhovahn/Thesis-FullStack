const models = require('../models');


exports.seed = (knex, Promise) => {
  return knex('tweets').del()
    .then(() => {
    });
};

