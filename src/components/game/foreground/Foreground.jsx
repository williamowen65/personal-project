import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { assignAngles } from '../card/cardLogic';

import Card from '../card/Card';

export default function Foreground() {

    const [cardData, setCardData] = useState(8)
    const [cards, setCards] = useState([])

    useEffect(() => {
        
        const myCards = assignAngles(cardData)
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
