import React from 'react';
import { Image } from '../components/Image';
import {PRESENTATION} from '../assets/presentation.js';
import { Presentation } from '../components/Presentation.jsx';
import { Title } from '../components/Title.jsx';

export const Home = () => {
  return (
    <>
      <main>
        <section>
          <h1 className='titleHome'>
            <Title title={"Hola, soy tu desarrollador"} subTitle={"Ulises Rodirugez"} classText={'titleHome__name'}/>
          </h1>
        </section>
        <section className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 photo-container'>
              <div>
                <Image path={"./img/yoImg.jpeg"} name={"ulises imagen"} />
              </div>
              <div>
                <h2 className='jobTitle'>
                  <Title title={"Full-Stack"} subTitle={"developer"}/>
                </h2>
              </div>
            </div>
            <div className='col-lg-9 order-lg-first'>
              {PRESENTATION.map(pres=><Presentation key={pres.id} subTitle={pres.subTitle} text={pres.text}/>)}
            </div>
          </div>
        </section>
        <section>
          aficiones
          hobbys
          etc

          ingrese en un grupo q ya habia comenzado a trabajar, si bien me ubiera gustado particiar en toda la parte de la creacion desde 0
          lo vi como una experiencia de ingresar en un proyecto q ya habia comenzado y tener q adaptarme al trabajo q ya estaba realizado
          para mi el tiempo de entrega se debe respetar lo mejor posible
          mi palabra es mi garantia, cuando uno da su palabra y toma un compromiso se debe cumplir, incluso si no tengo la habilidad o conocimiento para realizar la tarea si te di mi palabra de alguna manera voy a respetar y cumplir con el compromiso

          Hola me presento, soy ulises rodriguez tu futuro desarrollador full-stack y te doy la bienvenida a mi porfolio
          en este porfolio no solo vas a poder ver infomacion mas detallada q en mi CV sino q ademas vas a tener un apartado de proyectos
          donde podras ver todos los proyectos q vaya realizando

          
          <div className='mt-5'>
              ACA IRIA EL VIDEO MOSTRANDO TODO EL PORFOLIO
              <br></br>
              PODES HACER UN EDIT EN EL CUAL :
              <br></br>

              1-UN VIDEO DONDE SE VE LA CARA COMPLETA HACIENDO LA PRESENTACION
              Hola me presento, soy ulises rodriguez tu futuro desarrollador full-stack y te doy la bienvenida a mi porfolio
              <br></br>

              2- LUEGO PONES TU CARA A UN COSTADO O HACER UNA TRASICION DONDE MOSTRAS CON TITULOS LA SECCION Q VAS A EXPLICAR (PODES HACER UN GIF ANIMADO Y DESPUES UNIRLOS)
              en este porfolio no solo vas a poder ver infomacion mas detallada q en mi CV sino q ademas vas a tener un apartado de proyectos
              donde podras ver todos los proyectos q vaya realizando

              o el apartado de cursos donde podras ver los cursos q e realizado, tanto los certificados como los q no

              en la seccion de habilidades como su nombre indica
          </div>
        </section>
      </main>
    </>
  )
}
