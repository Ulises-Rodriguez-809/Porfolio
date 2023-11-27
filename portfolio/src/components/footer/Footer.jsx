import React from 'react';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';

export const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='ulFooter'>
                <li>
                    <div>
                        <p>Redes:</p>
                        <ul className='ulRedes'>
                            <li>
                                <a href='https://github.com/Ulises-Rodriguez-809' target='_blanck'>
                                    <img src={github} alt='GitHub' className='github'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/ulises-rodriguez-desarrolloweb-fullstack/'  target='_blanck'>
                                    <img src={linkedin} alt='linkedin' className='linkedin'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://instagram.com/ulirodriguez5?igshid=OGQ5ZDc2ODk2ZA==' target='_blanck'>
                                    <img src={instagram} alt='Instagram' className='instagram' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Contactos:</p>
                        <ul className='ulContacto'>
                            <p>uliisesrodriguez809@gmail.com</p>
                            <p>2302411290</p>
                        </ul>
                    </div>
                </li>
            </ul>
        </footer>
    )
}
