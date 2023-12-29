import React from 'react'

export const Courses = () => {
    return (
        <>
            <main>
                <section className='container-fluid'>
                    <div className='row'>
                        <h1 className='col'>Cursos:</h1>
                    </div>
                </section>
                <section className='container-fluid'>
                    <div className='row'>
                        <article className='col-12'>
                            <h2>
                                Cursos certificados:
                            </h2>
                        </article>
                        <article className='col-12'>
                            <h2>
                                Cursos no certificados:
                            </h2>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}
