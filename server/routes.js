const passport = require('passport');

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


    // missing Request 
    app.use((req, res, next) => res.status(404).render('404'))
}

function checkLoggedIn(req, res, next) {
    if ( req.isAuthenticated()) return next();
    return res.redirect('/login')
}