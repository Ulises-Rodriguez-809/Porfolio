import './Footer.css'
import React from 'react';
import SN from '../../assets/js/routes/socialNetworks.js';
import { LinkElement } from '../navbar/LinkElement.jsx';
import { Contact } from './Contact.jsx';
import { Message } from './Message.jsx';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Message msgClass={"titleFooter"} text={"Si te gusto mi contenido o queres sumarme a algun grupo de trabajo"}/>
            <ul className='ulFooter'>
                <li>
                    <div>
                        <p>Redes:</p>
                        <ul className='ulRedes'>
                            {SN.map(img => <LinkElement key={img.name} url={img.path} isBlank={true} name={img.name} src={img.src} classImg={img.classImg} />)}
                        </ul>
                    </div>
                </li>
                <li>
                    <Contact mail={"uliisesrodriguez809@gmail.com"} cell={"2302411290"}/>
                </li>
            </ul>
            <Message msgClass={'thanks'} text={"😄 Muchas gracias por tu tiempo 😄"}/>
        </footer>
    )
}
