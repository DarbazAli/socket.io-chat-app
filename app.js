const bodyParser = require('body-parser');
const express = require('express')
const session = require('express-session');
const passport = require('passport');



const app = express();

const routes = require('./server/routes')

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

app.listen(3000, () => console.log("Listening on 3000"))