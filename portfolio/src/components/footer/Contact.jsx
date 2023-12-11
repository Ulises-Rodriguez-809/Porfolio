import React from 'react'

export const Contact = ({mail, cell}) => {
    return (
        <div>
            <p>Contactos:</p>
            <ul className='ulContacto'>
                <p>{mail}</p>
                <p>{cell}</p>
            </ul>
        </div>
    )
}
