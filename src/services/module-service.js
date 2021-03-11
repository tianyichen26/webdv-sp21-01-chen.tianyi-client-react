const lesson_url = "https://wbdv-generic-server.herokuapp.com/api/chen.tianyi/courses"
const topic_url = "https://wbdv-generic-server.herokuapp.com/api/chen.tianyi/modules"
export const createModuleForCourse = (courseId, module) =>
    fetch(`${lesson_url}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
    }
    })
        .then(response => response.json())


export const findModulesForCourse = (courseId) =>
    fetch(`${lesson_url}/${courseId}/modules`)
        .then(response => response.json())



export const updateModule = (moduleId, module) =>
    fetch(`${topic_url}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`${topic_url}/${moduleId}`, {
        method: "DELETE",
    })
        .then(response => response.json())


const api = {
    findModulesForCourse, createModuleForCourse,
    deleteModule, updateModule
};


export default api;