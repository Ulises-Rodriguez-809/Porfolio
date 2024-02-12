import React from 'react'
import { SkillCard } from './SkillCard'

export const SkillsCardContainer = ({array}) => {
    return (
        <>
            <div className='skillsCardsContainer'>
                <div className='skillsCardContainer'>
                    {array.map((item,index) => <SkillCard key={index} img={item.img} name={item.name}/>)}
                </div>
            </div>
        </>
    )
}
