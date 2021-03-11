import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './course-table.style.css';
export default class CourseTable extends
  React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return(
      <div>
          <Link to="/courses/grid">
              <i className="fas fa-th float-right fa-2x"></i>
          </Link>
        <h2>Course Table</h2>

        <table className="table" >

            <thead>
                            <tr>
                            </tr>
                            <th>Title</th>
                            <th class='head_1'>Owned by me </th>
                            <th class='head_2'>Last Modified</th>
                            </thead>
            <tbody>
              {
                this.props.courses.map(course =>
                  <CourseRow
                      key={course._id}
                      deleteCourse={this.props.deleteCourse}
                      updateCourse={this.props.updateCourse}
                    course={course}
                    title={course.title}
                    lastModified={course.lastModified}
                    owner={course.owner}/>)
              }

            </tbody>



        </table>
      </div>

    )
  }
}
