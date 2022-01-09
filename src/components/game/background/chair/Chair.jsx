import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { assignAngles } from '../../card/cardLogic'

export default function Chair({styles, children, cardCount}) {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const myCards = assignAngles(cardCount, true)
        setCards(myCards)
    }, [cardCount])

    return (
        <div className='chair' style={styles}>
            chair
            {cards}
            {children}
        </div>
    )
}
