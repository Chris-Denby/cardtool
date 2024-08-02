import { React, useEffect, useState, useContext } from "react";
import fetchCardByName from "../util/fetchCard.js"

const Summary = () => {

    const [cards, setCards] = useState([])

    useEffect(()=>{
        //do on first render
    },[])

    //logic
    const handleAddCard = async (event)=>{
        event.preventDefault()
        const cardName = event.target.value;
        const retrievedCard = fetchCardByName(cardName);
        setCards([...cards, retrievedCard])
    }

    //output
    return (
        <div>
            <div>
                <input name="Enter a card name"/>
                <button name="Add card" onClick={(event)=>{
                    handleAddCard(event)
                }}/>
            </div>

            <div>
                {cards.length > 0 ? (cards.map(
                    (card)=>(
                        //render the card
                        <div>
                            <h3>{card.name}</h3>
                            <h3>{card.manaCost}</h3>
                            <h3>{card.text}</h3>
                        </div>
                    )
                )) : (<></>)}
            </div>
        </div>




    )
}

export default Summary

