require('dotenv').config()

module.exports = {
    jwtSecretForSigning: process.env.JWT_SECRET,
    jwtSession: {
        session: false
    }
};