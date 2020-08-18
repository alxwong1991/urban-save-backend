
exports.up = function (knex) {
    return knex.schema.createTable('orders', (table) => {
        table.increments()
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('users.id')
        table.string('order_status')
        table.string('payment_id')
        table.timestamps(false, true)
    })
        .createTable('ordered_product_details', (table) => {
            table.increments()
            table.integer('product_id').notNullable()
            table.foreign('product_id').references('products.id')
            table.integer('order_id').notNullable()
            table.foreign('order_id').references('orders.id')
            table.integer('quantity').unsigned()
            table.integer('total_price').unsigned()
            table.string('ordered_product_status').defaultTo('pending')
            table.timestamps(false, true)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('orders').dropTable('ordered_product_details');
};
