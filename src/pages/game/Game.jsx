import React, { useEffect, useState } from 'react'
import StartUpModal from '../../components/modal/startUpModal/StartUpModal';
import Foreground from '../../components/game/foreground/Foreground';
import Background from '../../components/game/background/Background';

export default function Game() {

    const [gameData, setGameData] = useState({
        background: {
            totalOtherPlayers: 2,
            otherPlayersTotalHand: [3, 6]
        }
    })

    useEffect(() => {
      
    }, [])

 
    return (
        <>
           <StartUpModal/>


            <div>
                <Background background={gameData.background}/>
                <Foreground />
            </div>
        </>
    )
}
