import React from 'react'

export const Message = ({msgClass, text}) => {
    return (
        <div className={msgClass}>
            <p>{text}</p>
        </div>
    )
}
