import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

import Card from '../card/Card';

export default function Foreground() {

    const [cardData, setCardData] = useState(6)
    const [cards, setCards] = useState([])

    useEffect(() => {
        console.log('cards: ', cards, cardData);
        const myCards = []
        for(let i = 0; i < cardData; i++){
            myCards.push(<Card key={i}/>)
        }
        setCards(myCards)
        console.log(myCards);

    }, [cardData])
    // console.log(cards);

    return (
        <div className='foreground hand'>
            {cards}
        </div>
    )
}
