import React from 'react'
import { NavBar } from './navbar/NavBar'
import { Footer } from './footer/Footer'

export const Layout = ({children}) => {
    return (
        <>
            <NavBar />
                <div>
                    {children}
                </div>
            <Footer />
        </>
    )
}
