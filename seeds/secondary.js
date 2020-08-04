

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      knex('product_category').del()
    })
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('products').insert([
          // insert info for chairs
          {
            id: 1,
            product_name: 'Chair 1',
            product_description: 'a very modern office chair that is rarely used',
            product_image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
            product_price: 500,
            max_stock_available: 10
          },
          {
            id: 2,
            product_name: 'Chair 2',
            product_description: 'a portable chair for portability',
            product_image: 'https://images.unsplash.com/photo-1576528418822-5ddc2568621b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 200,
            max_stock_available: 18
          },
          {
            id: 3,
            product_name: 'Chair 3',
            product_description: 'a comfy chair with wheels',
            product_image: 'https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 700,
            max_stock_available: 7
          },
          {
            id: 4,
            product_name: 'Chair 4',
            product_description: 'a high chair style that is suitable for high tables',
            product_image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            product_price: 400,
            max_stock_available: 9
          },
          // insert info for tables
          {
            id: 5,
            product_name: 'Table 1',
            product_description: 'a very modern portable table',
            product_image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 800,
            max_stock_available: 4
          },
          {
            id: 6,
            product_name: 'Table 2',
            product_description: 'a stylish table for one to one meetings',
            product_image: 'https://images.unsplash.com/photo-1539291973002-31d386fde4dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 700,
            max_stock_available: 5
          },
          {
            id: 7,
            product_name: 'Meeting table 1',
            product_description: 'a modern style meeting table',
            product_image: 'https://images.unsplash.com/photo-1564320382348-c06ae02a3897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
            product_price: 2300,
            max_stock_available: 3
          },
          {
            id: 8,
            product_name: 'Meeting table 2',
            product_description: 'a minimalistic meeting table',
            product_image: 'https://images.unsplash.com/photo-1572025442348-511bdcae389b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 1800,
            max_stock_available: 2
          },
          // insert info for others
          {
            id: 9,
            product_name: 'Lamp',
            product_description: 'a very modern office lamp',
            product_image: 'https://images.unsplash.com/photo-1523892372876-28fbc08a22ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 70,
            max_stock_available: 12
          },
          {
            id: 10,
            product_name: 'Stationerys',
            product_description: 'a set of stationerys',
            product_image: 'https://images.unsplash.com/photo-1507831273071-5db7707d651b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
            product_price: 50,
            max_stock_available: 1
          },
          {
            id: 11,
            product_name: 'Antique typewriter',
            product_description: 'a collectable typewriter',
            product_image: 'https://images.unsplash.com/photo-1564564179979-5e9833a3a8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            product_price: 200,
            max_stock_available: 3
          },
          {
            id: 12,
            product_name: 'Portable tablet',
            product_description: 'a wifi tablet that can control the office ac and lights',
            product_image: 'https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            product_price: 3000,
            max_stock_available: 5
          },
        ])
          .then(() => {
            return knex('product_category').insert([
              // chairs
              {
                id: 1,
                product_id: 1,
                chair: true,
                table: false,
                other_equipments: false
              },
              {
                id: 2,
                product_id: 2,
                chair: true,
                table: false,
                other_equipments: false
              },
              {
                id: 3,
                product_id: 3,
                chair: true,
                table: false,
                other_equipments: false
              },
              {
                id: 4,
                product_id: 4,
                chair: true,
                table: false,
                other_equipments: false
              },
              // tables
              {
                id: 5,
                product_id: 5,
                chair: false,
                table: true,
                other_equipments: false
              },
              {
                id: 6,
                product_id: 6,
                chair: false,
                table: true,
                other_equipments: false
              },
              {
                id: 7,
                product_id: 7,
                chair: false,
                table: true,
                other_equipments: false
              },
              {
                id: 8,
                product_id: 8,
                chair: false,
                table: true,
                other_equipments: false
              },
              // others
              {
                id: 9,
                product_id: 9,
                chair: false,
                table: false,
                other_equipments: true
              },
              {
                id: 10,
                product_id: 10,
                chair: false,
                table: false,
                other_equipments: true
              },
              {
                id: 11,
                product_id: 11,
                chair: false,
                table: false,
                other_equipments: true
              },
              {
                id: 12,
                product_id: 12,
                chair: false,
                table: false,
                other_equipments: true
              },
            ])
          })
          .catch(error => console.log(`There is an ${error}`))
      ])
    })
    .catch(error => console.log(`There is an ${error}`))
}

