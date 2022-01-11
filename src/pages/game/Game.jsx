import React, { useEffect, useState } from 'react'
import StartUpModal from '../../components/modal/startUpModal/StartUpModal';
import Foreground from '../../components/game/foreground/Foreground';
import Background from '../../components/game/background/Background';

export default function Game() {

    const [gameData, setGameData] = useState({
        background: {
            totalOtherPlayers: 2,
            otherPlayersTotalHand: [4, 6]
        },
        foreground: {
            myCards: [
                ['A', 'hearts'], 
                ['queen', 'spades'], 
                ['5','spades'],
                ['jack', 'hearts'], 
                ['7','clubs'],
                ['3','diamonds'],
                ['5', 'hearts']
            ]
        }
    })

    useEffect(() => {
      
    }, [])

 
    return (
        <>
           <StartUpModal/>


            <div>
                <Background background={gameData.background}/>
                <Foreground foreground={gameData.foreground}/>
            </div>
        </>
    )
}
