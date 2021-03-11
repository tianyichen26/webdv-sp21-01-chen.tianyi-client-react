const module_URL = "https://wbdv-generic-server.herokuapp.com/api/khan.mubaris/modules";

const lessons_URL = "https://wbdv-generic-server.herokuapp.com/api/khan.mubaris/lessons";

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${module_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${module_URL}/${moduleId}/lessons`)
        .then(response => response.json())


export const updateLesson = (lessonId, module) =>
    fetch(`${lessons_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${lessons_URL}/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());



export default {
    findLessonsForModule, createLessonForModule, updateLesson, deleteLesson
}