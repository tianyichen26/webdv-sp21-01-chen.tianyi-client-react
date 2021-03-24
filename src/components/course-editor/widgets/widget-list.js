import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import widgetsService from '../../../services/widget-service'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom'

const WidgetList = (
    {
        widgets = [],
        findAllWidgets,
        findWidgetsForTopic,
        createWidgetForTopic,
        updateWidget,
        deleteWidget
    }) => {
    const [editWidget, setWidget1] = useState({});
    const {topicId} = useParams()
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])
    return (
        <div>

            <h2>Widget List</h2>
            <i onClick={() => createWidgetForTopic(topicId)}
                           className="fas fa-plus fa-2x float-right btn btn-sm"></i>

            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget1}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    editing={editWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget1}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    editing={editWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => (
{
    findAllWidgets: () => {
        widgetsService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    },
    findWidgetsForTopic: (topicId) => {
        widgetsService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    },
    createWidgetForTopic: (topicId) => {
        const defaultWidget = {type: "HEADING", size: 1, text: "New Widget"};
        widgetsService.createWidget(topicId, defaultWidget)
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    },
    deleteWidget: (widgetId) => {
        widgetsService.deleteWidget(widgetId)
            .then(status => dispatch({
                type: 'DELETE_WIDGET',
                widgetToDelete: widgetId
            }))
    },
    updateWidget: (widgetId, updatedWidget) => {
        widgetsService.updateWidget(widgetId, updatedWidget)
            .then(widget => dispatch({
                type: "UPDATE_WIDGET",
                widget: updatedWidget,
                id: widgetId
            }))
    }
}
)


export default connect(stpm, dtpm)
(WidgetList);