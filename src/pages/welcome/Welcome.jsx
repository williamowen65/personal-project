import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export default function Welcome() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Welcome to my card game</h1>
           <button onClick={() => navigate(`/game/${uuidv4()}`)}> start up a game</button>
        </div>
    )
}

