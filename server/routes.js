const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



module.exports = function main(app) {
    // create the home url
    app.get('/', (req, res) => {
        res.render('index')
    })

    app
        .route('/login')
        .get((req, res) => res.render('login'))

        .post(passport.authenticate('local', {
            failureRedirect: '/login',
            successRedirect: '/chat'
        }))

    app
        .route('/logout')
        .get((req, res) => {
            req.logout();
            res.redirect('/login');
        })

    app
        .route('/chat')
        .get( checkLoggedIn, (req, res) => {
            res.render('chat')
        })

    passport.use(new LocalStrategy( (username, password, done) => {

        // authenticated? yes =>
        if ( username == 'darbaz' && password == '1234') {
            return done(null, {username: username})
        }

        // authenticated? no ->
        else {
            return done(null, false);
        }
    }))


    // missing Request 
    app.use((req, res, next) => res.status(404).render('404'))

    passport.serializeUser((user, done) => {
        done(null, user.username)
    })

    passport.deserializeUser((username, done) => {
        return done(null, {username: username})
    })
}

function checkLoggedIn(req, res, next) {
    if ( req.isAuthenticated()) return next();
    return res.redirect('/login')
}