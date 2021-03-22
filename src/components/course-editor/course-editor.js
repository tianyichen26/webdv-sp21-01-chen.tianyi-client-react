import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";

import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import WidgetList from "./widgets/widget-list"
import courseService from "../../services/course-service";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})


// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, layout} = useParams();
    const [title, setNewTitle] = useState('')
    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setNewTitle(course.title))
    }, [])
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg">
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times fa-2x btn"></i>
                    </Link>

                    <h1>Web Dev Course Editor - {title}</h1>
                </nav>

                <div className="row bottom-part">
                    <div className="col-3 priority">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>

            </div>
        </Provider>
    )
}

export default CourseEditor