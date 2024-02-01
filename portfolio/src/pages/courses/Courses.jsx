import './Courses.css';
import React from 'react'

export const Courses = () => {
    return (
        <>
            <main>
                <section>
                    <div>
                        <h1 className='title-course'>
                            <span>🎓Cursos🎓</span>
                        </h1>
                    </div>
                </section>
                <section className='container-fluid'>
                    <div className='row'>
                        <article className='col-12'>
                            <section>
                                <h2 className='courses'>
                                    <span>Cursos certificados:</span>
                                </h2>
                            </section>
                            <section>

                            </section>
                        </article>
                        <article className='col-12'>
                            <section>
                            <h2 className='courses'>
                                    <span>Cursos no certificados:</span>
                                </h2>
                            </section>
                            <section>

                            </section>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}
