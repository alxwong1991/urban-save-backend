
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      knex('buyer_info').del()
    })
    .then(() => {
      knex('seller_info').del()
    })
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('users').insert([
          // insert all users
          {
            id: 1,
            email: 'seller@gmail.com',
            password: '123',
            is_seller: true
          },
          {
            id: 2,
            email: 'buyer1@gmail.com',
            password: '321',
            is_seller: false
          },
          {
            id: 3,
            email: 'buyer2@gmail.com',
            password: '567',
            is_seller: false
          },
          {
            id: 4,
            email: 'buyer3@gmail.com',
            password: '765',
            is_seller: false
          },
        ])
          .then(() => {
            return knex('buyer_info').insert([
              // insert for buyers
              {
                id: 1,
                user_id: 2,
                company_name: 'jc holdings',
                phone: '12345'
              },
              {
                id: 2,
                user_id: 3,
                company_name: 'd&t company',
                phone: '11122'
              },
              {
                id: 3,
                user_id: 4,
                company_name: 'ac asset management co',
                phone: '22233'
              },
            ])
              .then(() => {
                return knex('seller_info').insert([
                  // insert for seller
                  {
                    id: 1,
                    user_id: 1,
                    company_name: 'alex & co',
                    phone: '99999'
                  },
                ])
              })
          })
          .catch(error => console.log(`There is an ${error}`))
      ])
    })
    .catch(error => console.log(`There is an ${error}`))
}
