import React from 'react'
import { SKILLSARRAY } from '../../assets/js/skills/skills'
import './Skills.css'
import { SkillsCardContainer } from './SkillsCardContainer'

export const Skills = () => {
  return (
    <>
      <main>
        <section>
          <div>
            <h1 className='skillsTitle'>👨‍💻Habilidades👨‍💻</h1>
          </div>
        </section>
        <section>
          <article>
            <div>
              <p className='skillsIntroduction'>
                En este apartado podras ver todas mis habilidades/tecnologias con las que trabajo
              </p>
            </div>
          </article>
          <div>
            {SKILLSARRAY.map(skills => <div key={skills.area}>
              <p className='skillArea'>{skills.area}</p>
              <SkillsCardContainer array={skills.skills}/>
            </div>)}
          </div>
        </section>
      </main>
    </>
  )
}
