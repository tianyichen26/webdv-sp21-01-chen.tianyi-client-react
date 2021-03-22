import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import widgetsService from '../../../services/widget-service'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom'
import WidgetActions from "./widge-action";
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
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right btn btn-sm"/>
            <h2>Widget List</h2>
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

const dtpm = (dispatch) => {
    return {
        createWidgetForTopic: (topicId) => WidgetActions.createWidgetForTopic(dispatch, topicId),
        updateWidget: (widgetId, widget) => WidgetActions.updateWidget(dispatch, widgetId, widget),
        deleteWidget: (widgetId) => WidgetActions.deleteWidget(dispatch, widgetId),
        findWidgetsForTopic: (topicId) => WidgetActions.findWidgetsForTopic(dispatch, topicId)
    }
}

export default connect(stpm, dtpm)
(WidgetList);