import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Card from '../card/Card';
import { composeDecks } from '../card/cardLogic';
import { assignChairs } from './chair/chairLogic';


export default function Background({background, tableData}) {

    const [chairs, setChairs] = useState([])

    const [table, setTable ] = useState('expects an object. this will be something that reflects user input,')
    const [decks, setDecks ] = useState(null)
    
    useEffect(() => {
        const myChairs = assignChairs(background)
        setChairs(myChairs)

        const theDecks = composeDecks(tableData.decks)
        console.log(theDecks);
        setDecks(theDecks)



    }, [])

    // const myDecks = decks.map((doc) => {
    //     const styles = { 
    //         gridRow: doc.coordinates[0],
    //         gridColumn: doc.coordinates[1],
    //         transform: 'rotate(-51deg)'
    //     }
    //     return <Card styles={styles} classes={'tableCard'}/>
    // })

    return (
        <div className='background'>
            {chairs}
            <div className="table">
                <div className="cardPlotter">
                    {decks}
                    <Card classes={'tableCard'}/>
                </div>
            </div>
        </div>
    )
    
}
