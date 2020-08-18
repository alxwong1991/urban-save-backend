class buyerInfoService {
    constructor(knex) {
        this.knex = knex;
    }

    // getting a buyer user
    // listBuyers(user_id) {
    //     let query = this.knex("buyer_info")
    //         .select("*")
    //         .from("buyer_info")
    //         .where("buyer_info.user_id", "user.id")
    //     console.log(user_id, "getting a user")

    //     return query.then((rows) => {
    //         if (rows.length === 0) {
    //             return this.knex
    //                 .select("users.id as user_id")
    //                 .from("users")
    //                 .where("users.id", user_id)
    //                 .catch((err) => console.log(err))
    //         } else {
    //             return rows
    //             .catch((err) => console.log(err));
    //         }
    //     });
    // }

    listBuyers() {
        let query = this.knex
            .select("*")
            .from("users")
            .innerJoin("buyer_info", "buyer_info.user_id", "users.id")

        return query.then((rows) => {
            // console.log(rows);
            return rows
        })
    }

    // adds a new buyer info
    addBuyers(buyer, content) {
        // console.log("trying to add a new buyer")
        // console.log(content)

        let query = this.knex
            .select("*")
            .from("users")
            .innerJoin("buyer_info", "buyer_info.user_id", "users.id")

        return query.then((rows) => {
            if (rows.length === 0) {
                return this.knex
                    .insert({
                        first_name: content.first_name1,
                        last_name: content.last_name1,
                        company_name: content.company_name1,
                        address_1: content.address_1,
                        address_2: content.address_2,
                        district: content.district,
                        phone: content.phone
                    })
                    .into("buyer_info")
                    .where("buyer_info.user_id", buyer.id)
                    .catch((err) => console.log(err));
            }
        })
    }

    // update the buyer info
    updateBuyers(buyer, content) {
        let query = this.knex
        .select("*")
        .from("users")
        .innerJoin("buyer_info", "buyer_info.user_id", "users.id")

        return query.then((rows) => {
            if (rows.length === 0) {
                return this.knex
                    .update({
                        first_name: content.first_name1,
                        last_name: content.last_name1,
                        company_name: content.company_name1,
                        address_1: content.address_1,
                        address_2: content.address_2,
                        district: content.district,
                        phone: content.phone
                    })
                    .into("buyer_info")
                    .where("buyer_info.user_id", buyer.id)
                    .catch((err) => console.log(err));
            }
        })
    }
}

module.exports = buyerInfoService;