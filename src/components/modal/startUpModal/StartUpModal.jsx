import React, { useEffect, useRef, useState } from 'react'

import Modal from '../Modal'
import { useLocation } from 'react-router-dom'



export default function StartUpModal() {
    const location = useLocation()
    const [onLoad, setOnLoad] = useState(true)
    

    function closeModal() {
        setOnLoad(false)
    }
    
    

    function handleCopy(ev) {
        const site = "https://MyWebsiteDomain.com" + location.pathname
        navigator.clipboard.writeText(site).then(() => {
            console.log('success');
            ev.target.innerText = 'Copied'
        }).catch((err) => {
            console.log(err);
            ev.target.innerText = 'Copy Failed'
        })
        setTimeout(() => {
            ev.target.innerText = 'Copy'
        }, 3000)
    }

    return (
        <>
           {onLoad && (
                <Modal closeModal={closeModal}>
                    <u><p>Share link with your friends</p></u>
                    <div className='copy'>
                        <span className='link'>
                        { "https://MyWebsiteDomain.com" + location.pathname }
                        </span>
                        <button onClick={handleCopy}>Copy</button>
                    </div>
                </Modal>
            ) }
        </>
    )
}
