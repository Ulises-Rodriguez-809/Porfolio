import './Home.css'
import React from 'react';
import { Image } from '../../components/Image.jsx';
import {PRESENTATION} from '../../assets/js/presentation.js';
import { Presentation } from '../../components/Presentation.jsx';
import { Title } from '../../components/Title.jsx';

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
                <Image path={"./img/porfolioImg/yoImg1.jpeg"} name={"ulises imagen"} />
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

        ¡Hola, Ulises! ¿Cómo estás? Acá Francisco del equipo de Customer Evidence de Coderhouse.

Te escribo porque vimos tu perfil en nuestra base de estudiantes Top10 y nos gustaría que las personas que quieren saber más sobre el curso de JavaScript en Coderhouse, puedan ver tu proyecto final de la cursada y conocer tu experiencia!

Es por esto que queremos acercarte una propuesta, que se basa en generar un post de tu proyecto final en LinkedIn en formato Carrusel, contando cómo fue el proceso para desarrollarlo.

Buscamos que aquellas personas que están interesadas en inscribirse a nuestros cursos, puedan conocer experiencias reales de otros estudiantes!

Como beneficio por participar, te ofrecemos la oportunidad de acceder a un 50% de descuento en tu próxima inscripción. Para obtener tu beneficio, solo necesitas enviarme el enlace del post.

Te adjuntamos una guía con algunos tips y ejemplos para el desarrollo del contenido en caso de que decidas avanzar.

Nos encantaría que puedas participar, quedo a la espera de tu respuesta.
Muchas gracias.

¡Saludos! 

          Hola me presento, soy ulises rodriguez tu futuro desarrollador full-stack y te doy la bienvenida a mi porfolio
          en este porfolio no solo vas a poder ver infomacion mas detallada q en mi CV sino q ademas vas a tener un apartado de proyectos
          donde podras ver todos los proyectos q vaya realizando

          ingrese en un grupo q ya habia comenzado a trabajar, si bien me ubiera gustado particiar en toda la parte de la creacion desde 0
          lo vi como una experiencia de ingresar en un proyecto q ya habia comenzado y tener q adaptarme al trabajo q ya estaba realizado

          cuando ingrese al proyecto este estaba un poco desorganizado, asi q mi primera accion fue coordinar una video llamada con todos los integrantes del grupo para conocernos y aclarar como debia comportarse la pagina cuando el usuario interactuara con ella de esta manera entender lo mejor posible la idea a tenian el grupo de diseño y evitar tener que hacer futuras modificaciones debido a una mala interpretacion del diseño.
          
          luego otra video llamada entre los programadores para asi conocer las fortalecas de cada uno y realizar division de trabajos

          me tome el atrevimiento de liderar el grupo de desarrolladores, siempre desde el lado del respeto y tomando en cuenta las opiniones e ideas q presentaban mis compañeros. la verdad se formo un grupo muy unido y fue muy facil comunicarnos entre nosotros una ves nos conocimos un poco mejor

          tambien me mantuve en contacto con la clienta para ir mostrandole avances del proyecto 

          algunos problemas:
          el repositorio: 
          1-si bien todos teniamos experiencia en Github ninguno de nosotros habia compartido un repositorio con otra persona, por lo cual tuve q ponerme a leer la documentacion de Git para la creacion de las ramas de trabajo. 
          2-Luego a la hora de combinar las ramas en la rama pricipal tuve q ponerme a analizar el codigo tanto de de mis compañeros como el mio para solucionar conflictos con los estilos
          3-intente componetizar los mas posible para q de esta manera pudieramos reutilizarlos y asi evitar repeticion del codigo
          

          
          mi palabra es mi garantia, cuando uno da su palabra y toma un compromiso se debe cumplir, incluso si no tengo la habilidad o conocimiento para realizar la tarea si te di mi palabra de alguna manera voy a respetar y cumplir con el compromiso.

          
          Habla sobre q coder house le gusto tanto tu proyecto q te pidio hacer un post en linkedin para poder postrarselo a otros estudiantes
          
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
