module.exports = app => {
    const { existsOrError } = app.api.validation 
    
    const getCard = async (req, res) => {
        const cardName = req.params.name
        try {
            existsOrError(cardName)
        } catch(msg) {
            return res.status(400).send(msg)
        }
        const { getCard: getCardDb } = app.api.cardsDb
        try {
            const card = await getCardDb(cardName)
            res.json(card)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    return { getCard}
}