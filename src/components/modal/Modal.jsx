import React from 'react'


export default function Modal({closeModal, children}) {
    return (
        <div className='modal'>
            <div onClick={closeModal} className='close'>X</div>
            {children}
        </div>
    )
}
