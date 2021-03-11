import React from 'react';
import {Link} from "react-router-dom";

import CourseCard from './course-card';


const CourseGrid =({courses, deleteCourse, addCourse})=>
        <div>
                      <Link to="/courses/table">
                          <i className="fas fa-th float-right fa-2x"></i>
                      </Link>
            <h2>Course Grid</h2>
            <div class="container course-list course-list-first">

                <div className="row">
                    {
                        courses.map((course, index) =>
                            (<CourseCard
                                deleteCourse={deleteCourse}
                                key={index}
                                course={course}/>)
                        )
                    }
                </div>
           </div>

        </div>

export default CourseGrid;