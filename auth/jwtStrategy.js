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

            // getting buyer users
            let query = await knex("users")
                .innerJoin("buyer_info", "buyer_info.user_id", "users.id", payload.id)

            await query
            let user = {
                id: query[0].id
            }

            if (user) {
                return done(null, { id: user.id })
            } else {
                return done(new Error('User Not Found!'), null)
            }
        }
    );

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