const express = require('express')
const session = require('express-session');
const passport = require('passport');



const app = express();

const routes = require('./server/routes')

// setup template engine
app.set('views', './views');
app.set('view engine', 'pug');

/*==================================================
    SETUP PASSPORT AND SESSION
===================================================*/
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(passport.initialize());
app.use(passport.session());



// serve static files
app.use(express.static(__dirname + '/public'));

routes(app)

app.listen(3000, () => console.log("Listening on 3000"))