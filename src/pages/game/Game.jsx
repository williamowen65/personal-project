import React, { useEffect, useState } from 'react'
import StartUpModal from '../../components/modal/startUpModal/StartUpModal';
import Foreground from '../../components/game/foreground/Foreground';
import Background from '../../components/game/background/Background';

export default function Game() {

    

    useEffect(() => {
      
    }, [])

 
    return (
        <>
           <StartUpModal/>


            <div>
                <Background />
                <Foreground />
            </div>
        </>
    )
}
