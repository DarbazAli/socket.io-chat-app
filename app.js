const express = require('express')

const app = express();



// setup template engine
app.set('views', './views');
app.set('view engine', 'pug');

// serve static files
app.use(express.static(__dirname + '/public'));

// create the home url
app.get('/', (req, res) => {
    res.render('index', {title: 'Home', message: "Hello There"})
})

app
    .route('/login')
    .get((req, res) => res.render('login'))



app.use((req, res, next) => res.status(404).render('404'))

app.listen(3000, () => console.log("Listening on 3000"))