import React from 'react'

export const SkillCard = ({ img, name }) => {
    return (
        <div className='cardContainer'>
            <div>
                <div className='cardSkillImg'>
                    <img src={img} alt={name} />
                </div>
                <div className='cardSkillName'>
                    <p>
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )
}
