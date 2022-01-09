import React from 'react'
import Chair from './Chair'

export function assignChairs(backgroundData) {
  console.log('this is my data: ', backgroundData);
    const myChairs = [];

    const styles = {
        '1OtherPlayer': {
            0: {
                transform: 'translate(-50%, -68%)'
            }
        },
        '2OtherPlayers': {
            0: {
                transform: 'translate(-165%, -58%) rotate(-38deg) skew(-38deg, 19deg)'
            },
            1: {
                transform: 'translate(63%, -61%) rotate(2deg) skew(2deg,30deg)'
            }
        },
        '3OtherPlayers': {
            0: 'test',
            1: 'test',
            3: 'test'
        }
    }

    let ourStyles;

    if(backgroundData.totalOtherPlayers === 1){
        ourStyles = styles['1OtherPlayer']
    } else if (backgroundData.totalOtherPlayers === 2){
        ourStyles = styles['2OtherPlayers']
    } else if (backgroundData.totalOtherPlayers === 3){
        ourStyles = styles['3OtherPlayers']
    }

    const cardCount = backgroundData.otherPlayersTotalHand

    console.log('ourstyle: ', ourStyles, styles, styles['2OtherPlayers'], backgroundData.totalOtherPlayers);

    for(let i = 0; i < backgroundData.totalOtherPlayers; i++){
        myChairs.push(<Chair key={i} styles={ourStyles[i]} cardCount={cardCount[i]}/>)
    }
    return myChairs

}
