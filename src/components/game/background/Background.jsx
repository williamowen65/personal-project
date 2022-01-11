import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Card from '../card/Card';
import { displayTableCards } from '../card/cardLogic';
import { assignChairs } from './chair/chairLogic';


export default function Background({background}) {

    const [chairs, setChairs] = useState([])

    const [table, setTable ] = useState('expects an object. this will be something that reflects user input,')
    const [deck, setDeck ] = useState(null)
    
    useEffect(() => {
        const myChairs = assignChairs(background)
        setChairs(myChairs)

        // const theDeck = composeDeck()
        // setDeck(theDeck)



    }, [])

    return (
        <div className='background'>
            {chairs}
            <div className="table">
                <Card classes={'tableCard'}/>
            </div>
        </div>
    )
    
}
