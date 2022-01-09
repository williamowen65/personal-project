import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { assignChairs } from './chair/chairLogic';


export default function Background({background}) {

    const [chairs, setChairs] = useState([])
    
    useEffect(() => {
        const myChairs = assignChairs(background)
        setChairs(myChairs)
    }, [])

    return (
        <div className='background'>
            {chairs}
            <div className="table"></div>
        </div>
    )
    
}
