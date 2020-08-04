
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      knex('order_details').del()
    })
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('orders').insert([
          {
            id: 1,
            user_id: 2,
            order_status: 'pending'
          },
          {
            id: 2,
            user_id: 3,
            order_status: 'pending'
          },
          {
            id: 3,
            user_id: 4,
            order_status: 'pending'
          },
        ])
          .then(() => {
            return knex('ordered_product_details').insert([
              {
                id: 1,
                product_id: 1,
                order_id: 1,
                quantity: 50,
                total_price: null
              },
              {
                id: 2,
                product_id: 2,
                order_id: 1,
                quantity: 50,
                total_price: null
              },
              {
                id: 3,
                product_id: 3,
                order_id: 1,
                quantity: 50,
                total_price: null
              },
              {
                id: 4,
                product_id: 4,
                order_id: 1,
                quantity: 50,
                total_price: null
              },
              {
                id: 5,
                product_id: 5,
                order_id: 2,
                quantity: 50,
                total_price: null
              },
              {
                id: 6,
                product_id: 6,
                order_id: 2,
                quantity: 50,
                total_price: null
              },
              {
                id: 7,
                product_id: 7,
                order_id: 2,
                quantity: 50,
                total_price: null
              },
              {
                id: 8,
                product_id: 8,
                order_id: 2,
                quantity: 50,
                total_price: null
              },
              {
                id: 9,
                product_id: 9,
                order_id: 3,
                quantity: 50,
                total_price: null
              },
              {
                id: 10,
                product_id: 10,
                order_id: 3,
                quantity: 50,
                total_price: null
              },
              {
                id: 11,
                product_id: 11,
                order_id: 3,
                quantity: 50,
                total_price: null
              },
              {
                id: 12,
                product_id: 12,
                order_id: 3,
                quantity: 50,
                total_price: null
              },
            ])
          })
          .catch(error => console.log(`There is an ${error}`))
      ])
    })
    .catch(error => console.log(`There is an ${error}`))
}
