
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('company', function(table) {
      table.increments('id').unsigned().primary();
      table.string('company', 40).notNullable();
    }),
    knex.schema.createTableIfNotExists('tweets', function(table) {  
      table.increments('id').unsigned().primary();
      table.string('tweets', 400);
      table.timestamps(true, true);
      table.string('term', 100);
    }),
    knex.schema.createTableIfNotExists('sentiment', function(table) {
      table.integer('company_id', 40)
      table.string('sentiment', 40);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles'),
    knex.schema.dropTable('tweets')
  ]);
};

