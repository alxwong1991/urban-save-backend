class orderService {
    constructor(knex) {
        this.knex = knex;
    }

    // handling chair order services

    listChairsOrders() {
        let query = this.knex
            // create a new query that inserts product_id into a specific order in orders table 
            // insert the data into the orders table
            .select("*")
            .from("ordered_product_details")
            .innerJoin("orders", "ordered_product_details.order_id", "orders.id")
            .innerJoin("products", "ordered_product_details.product_id", "products.id")
            // getting a category of chairs
            .where("order_id", 1)

        return query.then((data) => {
            return data
        })
            .catch((err) => console.log(err))
    }

    // async listTablesOrders() {
    //     let query = await this.knex
    //         .select("*")
    //         .from("ordered_product_details")
    //         .innerJoin("orders", "ordered_product_details.order_id", "orders.id")
    //         .innerJoin("products", "ordered_product_details.product_id", "products.id")
    //         .where("order_id", 2)

    //     return query.then((data) => {
    //         return data
    //     })
    //         .catch((err) => console.log(err))
    // }

    // async listOtherEquipmentsOrders() {
    //     let query = await this.knex
    //         .select("*")
    //         .from("ordered_product_details")
    //         .innerJoin("orders", "ordered_product_details.order_id", "orders.id")
    //         .innerJoin("products", "ordered_product_details.product_id", "products.id")
    //         .where("order_id", 3)

    //     return query.then((data) => {
    //         return data
    //     })
    //         .catch((err) => console.log(err))
    // }

    async addChairsOrders(order_info) {
        let query = await this.knex
            .select("*")
            .from("ordered_product_details")
            .innerJoin("orders", "ordered_product_details.order_id", "orders.id")
            .innerJoin("products", "ordered_product_details.product_id", "products.id")
            .where("order_id", 1)

        return query.then(async (data) => {
            if (data.length === 1) {
                return await this.knex
                    .insert({
                        product_id: order_info.product_id1,
                        quantity: order_info.quantity1,
                        total_price: order_info.total_price1,
                        payment_id: order_info.payment_id1,
                        product_name: order_info.product_name1,
                        product_description: order_info.product_description1,
                        product_image: order_info.product_image1,
                        product_price: order_info.product_price1,
                        max_stock_available: order_info.max_stock_available1
                    })
                    .into("ordered_product_details")
                    .where("order_id", 1)
                    .catch((err) => console.log(err))
            } else {
                return await this.knex
                    .update({
                        product_id: order_info.product_id1,
                        quantity: order_info.quantity1,
                        total_price: order_info.total_price1,
                        payment_id: order_info.payment_id1,
                        product_name: order_info.product_name1,
                        product_description: order_info.product_description1,
                        product_image: order_info.product_image1,
                        product_price: order_info.product_price1,
                        max_stock_available: order_info.max_stock_available1
                    })
                    .into("ordered_product_details")
                    .where("order_id", 1)
                    .catch((err) => console.log(err))
            }
        })
    }

    async updateChairsOrders(order_info, order_amend) {
        let query = await this.knex
            .select("*")
            .from("ordered_product_details")
            .innerJoin("orders", "ordered_product_details.order_id", "orders.id")
            .innerJoin("products", "ordered_product_details.product_id", "products.id")
            .where("order_id", 1)

        return query.then(async (data) => {
            if (data.length === 1) {
                return await this.knex
                    .insert({
                        product_id: order_info.product_id1,
                        quantity: order_info.quantity1,
                        total_price: order_info.total_price1,
                        payment_id: order_info.payment_id1,
                        product_name: order_info.product_name1,
                        product_description: order_info.product_description1,
                        product_image: order_info.product_image1,
                        product_price: order_info.product_price1,
                        max_stock_available: order_info.max_stock_available1
                    })
                    .into("ordered_product_details")
                    .where("order_id", 1)
                    .catch((err) => console.log(err))
            } else {
                return await this.knex
                    .update({
                        product_id: order_amend.product_id1,
                        quantity: order_amend.quantity1,
                        total_price: order_amend.total_price1,
                        product_price: order_amend.product_price1,
                        max_stock_available: order_amend.max_stock_available1
                    })
                    .into("ordered_product_details")
                    .where("order_id", 1)
                    .catch((err) => console.log(err))
            }
        })
    }

    async deleteChairOrders(order_info, order_remove) {
        console.log(order_info)

        let query = await this.knex
            .select("*")
            .from("ordered_product_details")
            .innerJoin("orders", "ordered_product_details.order_id", "orders.id")
            .innerJoin("products", "ordered_product_details.product_id", "products.id")
            .where("order_id", 1)

            return query.then(async (data) => {
                console.log(order_remove)

                if (data.length > 1) {
                    return await this.knex("ordered_product_details")
                    .where("order_id", 1)
                    .del()
                    .catch((err) => console.log(err))
                } else if (data.length === 1) {
                    console.log(order_remove, "removing the last prodcut in cart")

                    return await this.knex("ordered_product_details")
                    .where("order_id", 1)
                    .del()
                    .catch((err) => console.log(err))
                }
            })

    }

    // handling table order services


}

// listBuyerProfile(user_id) {
//     console.log("listBuyerProfile");
//     console.log(user_id)

//     let query = this.knex
//         .select(
//             "orders.id as orderID",
//             "orders.user_id",
//             "orders.status",
//             this.knex.raw(
//                 "to_char(ordered_product.created_at, 'DD/MM/YYY HH24:MI') as orderedProduct_created_at"),

//             "ordered_product_details.id as orderProductID",
//             "ordered_product_details.product_id",
//             "ordered_product_details.quantity",
//             "product_category.product_id",
//             "product_category.chair",
//             "product_category.table",
//             "product_category."

//         )
// }



module.exports = orderService;