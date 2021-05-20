module.exports = app => {
    
    const getCard = async (cardName) => {
        const res = `A carta ${cardName} existe estáticamente no sistema.`
        return res
    }

    return { getCard }
}