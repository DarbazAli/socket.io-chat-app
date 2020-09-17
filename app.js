const express = require('express')

const app = express();

const routes = require('./server/routes')

// setup template engine
app.set('views', './views');
app.set('view engine', 'pug');

// serve static files
app.use(express.static(__dirname + '/public'));

routes(app)

app.listen(3000, () => console.log("Listening on 3000"))