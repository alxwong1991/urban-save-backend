class sellerInfoService {
    constructor(knex) {
        this.knex = knex;
    }

    listSellerInfo(user) {
        let query = this.knex
            .select("*")
            .from("seller_info")
            .where("seller_info.user_id", user.id)
        console.log(user, "getting a user")
        return query.then((rows) => {
            if ((rows).length === 0) {
                return this.knex
                    .select("users.id as user_id")
                    .from("users")
                    .where("users.id", user.id)
                    .catch((err) => console.log(err))
            } else {
                return (rows)
                .catch((err) => console.log(err));
            }
        });
    }
}

module.exports = sellerInfoService;