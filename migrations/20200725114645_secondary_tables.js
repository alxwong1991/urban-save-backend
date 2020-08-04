
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', (table) => {
        table.increments()
        table.string('product_name', 255)
        table.string('product_description')
        table.string('product_image')
        table.integer('product_price')
        table.integer('max_stock_available').unsigned()
        table.timestamps(false, true)
    })
    .createTable('product_category', (table) => {
        table.increments()
        table.integer('product_id').notNullable()
        table.foreign('product_id').references('products.id')
        table.boolean('chair').notNullable().defaultTo(false)
        table.boolean('table').notNullable().defaultTo(false)
        table.boolean('other_equipments').notNullable().defaultTo(false)
        table.timestamps(false, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products').dropTable('product_category');
};
