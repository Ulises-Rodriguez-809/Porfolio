import React from 'react'
import { Link } from 'react-router-dom'

export const LinkElement = ({ liText, url }) => {
    return (
        <Link to={url} className='nav-link active'>{liText}</Link>
    )
}
