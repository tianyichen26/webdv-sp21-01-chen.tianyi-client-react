const lessons_URL = "https://wbdv-generic-server.herokuapp.com/api/khan.mubaris/lessons"
const topics_URL = "https://wbdv-generic-server.herokuapp.com/api/khan.mubaris/topics"


export const createTopic = (lessonId, topic) =>
    fetch(`${lessons_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessons_URL}/${lessonId}/topics`)
        .then(response => response.json())


export const updateTopic = (topicId, topic) =>
    fetch(`${topics_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${topics_URL}/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export default {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}