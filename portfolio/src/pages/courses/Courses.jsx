import './Courses.css';
import React from 'react'
import { CoursesTitle } from './CoursesTitle';
import { COURSES } from '../../assets/js/courses/courses';
import { CoursesSubtitle } from './CoursesSubtitle';
import { CoursesCarousel } from './CoursesCarousel';

export const Courses = () => {
    return (
        <>
            <main>
                <section>
                    <CoursesTitle />
                </section>
                <section className='container-fluid'>
                    <div className='row'>
                        {COURSES.map(course => <article className='col-12'>
                            <section>
                                <CoursesSubtitle subtitle={course.title} />
                            </section>
                            <section>
                                <CoursesCarousel coursesArray={course.courses} />
                            </section>
                        </article>)}
                    </div>
                </section>
            </main>
        </>
    )
}
