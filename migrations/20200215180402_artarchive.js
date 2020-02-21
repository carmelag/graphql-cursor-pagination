exports.up = function (knex, Promise) {
    return Promise.all([

        knex.schema.createTable('artwork', function (table) {
            table.increments('id').primary();
            table.string('title');
            table.integer('year');
            table.string('artist');
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('artwork')
    ])

};
