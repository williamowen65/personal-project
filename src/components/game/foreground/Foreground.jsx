import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { assignAngles } from '../card/cardLogic';

import Card from '../card/Card';

export default function Foreground({foreground}) {

    const [cardData, setCardData] = useState(8)
    const [cards, setCards] = useState([])

    useEffect(() => {
        const length = foreground.myCards.length
        
        console.log(length);
        const myCards = assignAngles(length, null, foreground.myCards)
        console.log(myCards);
        setCards(myCards)
    }, [cardData])
    // console.log(cards);
    

    return (
        <div className='foreground hand'>
            {cards}
        </div>
    )
}
