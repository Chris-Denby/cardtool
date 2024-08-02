const fetchCardByName = (cardName)=>{

    const mtg = require('mtgsdk')
    return mtg.card.where({
        name: {cardName}
    }).then(result => result.json())
}

export default fetchCardByName;