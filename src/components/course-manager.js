import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import './course-manager.style.css';
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
  extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
        .then(courses => this.setState({courses}))
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
        .then(status => {
            this.setState((prevState) => {
                let nextState = {...prevState}
                nextState.courses = prevState.courses.map(c => {
                    if(c._id === course._id) {
                        return course
                    } else {
                        return c
                    }
                })
                return nextState
            })
        })
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
        .then(status => {

          this.setState((prevState) => ({
            courses: prevState.courses.filter(c => c._id !== course._id)
          }))
        })
  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "2/21/2021"
    }

    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

  }


  render() {
    return(
      <div>
          <Link to="/">
              <i className="fas fa-2x fa-home float-right"></i>
          </Link>
          <h2>Course Manager</h2>
                    <div className="form-inline custom-form mr-auto">
                           <input className="form-control mr-sm-2"
                                type="text"
                                id="navBarSearchForm"
                                placeholder="New Course Title"/>
                                        <button className="btn btn-danger new-course-btn"
                                                type="submit"
                                                onClick={() => this.addCourse({
                                                      id: (new Date()).getTime() + '',
                                                      title: this.state.title
                                                })}>
                                              <i className="fa fa-plus"></i>
                                        </button>

                                  </div>



        <Route path="/courses/table" exact={true} >
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>

        <Route path="/courses/grid" exact={true} >
          <CourseGrid courses={this.state.courses}
          deleteCourse={this.deleteCourse}/>
        </Route>

        <Route path="/courses/editor"
         render={(props) => <CourseEditor {...props}/>}>
        </Route>

        <button className="plus-button float-right" onClick={this.addCourse}>
            <i className="fas fa-plus-circle fa-4x plus-icon"/>
        </button>
      </div>
    )
  }
}

