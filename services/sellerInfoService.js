class sellerInfoService {
    constructor(knex) {
        this.knex = knex;
    }

    listSellers(user) {
        let query = this.knex
            .select("*")
            .from("users")
            .innerJoin("seller_info", "seller_info.user_id", "users.id")
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