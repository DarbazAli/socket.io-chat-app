const bodyParser = require('body-parser');
const express = require('express')
const session = require('express-session');
const passport = require('passport');
const routes = require('./server/routes')
const auth = require('./server/auth');



const app = express();

/*==================================================
    USER MIDDLEWARES
===================================================*/
app.set('views', './views');
app.set('view engine', 'pug');

// serve static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}))




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



routes(app)
auth(app)

app.listen(3000, () => console.log("Listening on 3000"))