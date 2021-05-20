module.exports = app => {
    app.route('/cards/:name')
        .get(app.api.cards.getCard)

    
}