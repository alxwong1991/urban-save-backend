const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('../config');
const users = require('../users');
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (knex) => {
    // const knexConfig = require('../knexfile').development
    // const knex = require('knex')(knexConfig)


    const strategy = new passportJWT.Strategy(
        {
            secretOrKey: config.jwtSecretForSigning,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },

        async (payload, done) => {

            let query = knex
                .select("id", "email", "password", "is_seller")
                .from("users")
                .where("is_seller", false, payload.id)
                .orwhere("is_seller", true, payload.is_seller)

            query.then((users) => {
                const user = users.find(u => u.id === payload.id && u.is_seller === payload.is_seller)

                if (user === u.id) {
                    return done(null, { id: user.id })
                } else if (user === u.is_seller) {
                    return done(null, { is_seller: user.is_seller })
                } else {
                    return done(new Error("User not found"), null)
                }
            })
        });

    passport.use(strategy);

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
}