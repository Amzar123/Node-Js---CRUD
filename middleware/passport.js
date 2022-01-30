const User = require('../models/model')
const {Strategy, ExtractJwt} = require('passport-jwt')

require("dotenv/config")

const opt={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.ACCESS_TOKEN_SECRET
}

module.exports = (passport) => {
    passport.use(new Strategy(opt, async(payload, done) => {
        await User.findById(payload.user_id).then(async user => {
            if(user){
                return done(null, user);
            }
            return done (null, false);
        }).catch((err) => {
            return done(null, false)
        })
    }))
}