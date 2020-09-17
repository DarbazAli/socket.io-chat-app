const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;


module.exports = function main(app) {
    passport.serializeUser((user, done) => {
        return done(null, user.username)
    })

    passport.deserializeUser((username, done) => {
        return done(null, {username: username})
    })

    passport.use(new LocalStrategy( (username, password, done) => {
        // authenticated? yes =>
        if ( username == 'darbaz' && password == '1234') {
            return done(null, {username: username})
        }
        else {
            return done(null, false);
        }
    }))
}