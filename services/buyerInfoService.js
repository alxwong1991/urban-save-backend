class buyerInfoService {
    constructor(knex) {
        this.knex = knex;
    }

    // getting a buyer user
    listBuyers(user) {
        let query = this.knex
            .select("*")
            .from("buyer_info")
            .where("buyer_info.user_id", user.id);
        console.log(user, "getting a user")

        return query.then((rows) => {
            if ((rows).length === 0) {
                return this.knex
                    .select("users.id as user_id")
                    .from("users")
                    .where("users.id", user.id);
            } else {
                return (rows);
            }
        });
    }

    // adds a new buyer info
    addBuyers(user, content) {
        // console.log("trying to add a new buyer")
        // console.log(content)

        let query = await this.knex
            .select("*")
            .from("buyer_info")
            .where("buyer_info.user_id", user.id);

        return query.then((rows) => {
            if (rows.length === 1) {
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
                    .where("buyer_info.user_id", user.id);
            } else {
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
                    .where("buyer_info.user_id", user.id);
            }
        })
    }

    // update the buyer info
    updateBuyers(user, content) {
        let query = this.knex
            .select("*")
            .from("buyer_info")
            .where("buyer_info.user_id", user.id);

        return query.then((rows) => {
            if (rows.length === 1) {
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
                    .where("buyer_info.user_id", user.id)
                    .then(data => {
                        return this.knex
                            .update({
                                password: content.password1
                            })
                            .into("users")
                            .where("users.id", user.id);
                    });
            } else {
                return this.knex
                    .insert({
                        user_id: user.id,
                        first_name: content.first_name1,
                        last_name: content.last_name1,
                        company_name: content.company_name1,
                        address_1: content.address_1,
                        address_2: content.address_2,
                        district: content.district,
                        phone: content.phone
                    })
                    .into("buyer_info")
                    .where("buyer_info.user_id", user.id);
            }
        })
    }
}

module.exports = buyerInfoService;