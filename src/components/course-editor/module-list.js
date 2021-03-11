
import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
// import {findModulesForCourse, createModule} from "../services/module-service";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
        const {layout, courseId, moduleId, courseName} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return(
    <div>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                             <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${courseName}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            active={true}
                            item={module}/>
                    </li>
                )
            }
        </ul>
        <button className="btn btn-success"
        type="submit"
        onClick={() => createModule(courseId)}>
        <i className="fa fa-plus"></i>
        </button>
    </div>)}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            // alert(courseId);
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}


export default connect(stpm, dtpm)(ModuleList);
