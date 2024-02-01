import React from 'react'
import { Card } from './Card.jsx'

export const Carousel = ({courses}) => {
  return (
    <div id="carouselCourses" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {courses.map(course => <button key={course.id} type="button" data-bs-target="#carouselCourses" data-bs-slide-to={course.id} className={course.id === 0 ? "active" : ""} aria-current="true" aria-label={`Slide ${course.id}`}></button>)}
    {/* <button type="button" data-bs-target="#carouselCourses" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCourses" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCourses" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div className="carousel-inner">
    {courses.map(course => <div key={course.id} className={course.id === 0 ? "carousel-item active" : "carousel-item"}>
      <Card imgSrc={course.img} imgAlt={course.imgAlt} courseName={course.courseName} link={course?.link}/>
    </div>)}
    {/* <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselCourses" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselCourses" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
