import React from 'react'

export const Card = ({imgSrc, imgAlt, courseName, courseText, link}) => {
    return (
        <div className="card" style="width: 18rem;">
            <img src={imgSrc} className="card-img-top" alt={imgAlt} />
                <div className="card-body">
                    <h5 className="card-title">{courseName}</h5>
                    <p className="card-text">{courseText}</p>
                    {link && <a href={link} className="btn btn-primary" target='_blank'>Youtube img o pagina de coder</a>}  
                </div>
        </div>
    )
}
