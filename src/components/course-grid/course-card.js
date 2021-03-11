
import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
  <div className= "col-lg-2 col-md-4 col-sm-12 col-xs-16 mb-3">
      <div className="card card-whole">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div class="card-body">
                    <p class="card-text">
                        <div>

                          <Link to="/courses/editor" className="btn btn-primary">
                                 {course.title}
                           </Link>

                             <p className="card-text">Some quick examples</p>
                        </div>

                        <i class="fa fa-times delete-icon" onClick={() => deleteCourse(course)}></i>
                    </p>
                </div>
        </div>
  </div>

export default CourseCard
