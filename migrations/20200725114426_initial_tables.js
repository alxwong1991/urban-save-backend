
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments()
            table.string('email', 255).unique()
            table.string('password', 255)
            table.boolean('is_seller')
            table.string('stripe_buyer_id')
            table.timestamps(false, true)
        })
        .createTable('buyer_info', (table) => {
            table.increments()
            table.integer('user_id').unsigned()
            table.foreign('user_id').references('users.id')
            table.string('first_name', 255)
            table.string('last_name', 255)
            table.string('user_email', 255).unique()
            table.string('user_password', 255)
            table.string('company_name', 255)
            table.string('address_1')
            table.string('address_2')
            table.string('district')
            table.integer('phone')
            table.timestamps(false, true)
        })
        .createTable('seller_info', (table) => {
            table.increments()
            table.integer('user_id').unsigned()
            table.foreign('user_id').references('users.id')
            table.string('seller_first_name', 255)
            table.string('seller_last_name', 255)
            table.string('seller_email', 255).unique()
            table.string('seller_password', 255)
            table.string('company_name', 255)
            table.string('address_1')
            table.string('address_2')
            table.string('district')
            table.integer('phone')
            table.timestamps(false, true)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users').dropTable('buyer_info').dropTable('seller_info');
};
