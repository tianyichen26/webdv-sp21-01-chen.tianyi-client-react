const appUrl = "https://cs5610-hw1.herokuapp.com/api";

export const createWidget = (topicid, widget) =>
    fetch(`${appUrl}/topics/${topicid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicid) =>
    fetch(`${appUrl}/topics/${topicid}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${appUrl}/widgets`)
        .then(response => response.json())


export const findWidgetById = (widgetId) => {}

export const updateWidget = (widgetId, widget) =>
    fetch(`${appUrl}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${appUrl}/widgets/${widgetId}`, {
            method: "DELETE",
        })
        .then(response => response.json())



const api = {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget,
}

export default api