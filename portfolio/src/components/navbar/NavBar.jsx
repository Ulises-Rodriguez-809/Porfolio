import './NavBar.css'
import React from 'react'
import { LinkElement } from './LinkElement.jsx'
import ROUTES from '../../assets/js/routes/routes.js';
import { Brand } from './brand/Brand.jsx';

export const NavBar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Brand />
                    <button className="navbar-toggler navbar-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {ROUTES.map((ruta) => <LinkElement key={ruta.name} liText={ruta.name} url={ruta.path} isBlank={false}/>)}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}
