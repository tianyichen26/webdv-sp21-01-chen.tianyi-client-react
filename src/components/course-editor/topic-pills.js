import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'


const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic,
    }) => {
    const {courseId, courseName, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [moduleId, lessonId])
    return(
    <div>

        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                          <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/${layout}/edit/${courseId}/${courseName}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>
                    </li>
                )
            }

        </ul>
        <button className="btn btn-success"
        type="submit"
        onClick={() =>createTopic(lessonId)}>
        <i className="fa fa-plus"></i>
        </button>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})


const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {

        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },
    createTopic: (lessonId) => {

        topicService
            .createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },

})

export default connect(stpm, dtpm)(TopicPills)