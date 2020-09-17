

module.exports = function main(app) {
    // create the home url
    app.get('/', (req, res) => {
        res.render('index')
    })

    app
        .route('/login')
        .get((req, res) => res.render('login'))


    // missing Request 
    app.use((req, res, next) => res.status(404).render('404'))
}