import React from 'react'
import { Link } from 'react-router-dom'

export const LinkElement = ({ liText, url, isBlank, name, src, classImg }) => {
    return (
        isBlank ? <Link to={url} target='_blank'>
            <img src={src} alt={name} className={classImg} />
        </Link> : <Link to={url} className='nav-link active'>
            {liText}
        </Link>
    )
}
