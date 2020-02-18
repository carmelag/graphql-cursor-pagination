
exports.up = function (knex, Promise) {
    return Promise.all([

        knex.schema.createTable('artist', function (table) {
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.string('artMovement')
        }),

        knex.schema.createTable('artwork', function (table) {
            table.increments('id').primary();
            table.string('title');
            table.integer('year');
            table.integer('artistId')
                .unsigned()
                .references('id')
                .inTable('artist');
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('artist'),
        knex.schema.dropTable('artwork')
    ])

};
