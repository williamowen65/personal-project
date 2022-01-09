import React from 'react'

export default function Card({styles}) {
    console.log(styles);
    return (
        <div className='card' style={styles}>
            card
        </div>
    )
}
