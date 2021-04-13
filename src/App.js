import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">

          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          <Route path={[
                        "/courses/:layout/edit/:courseId/:courseName",
                        "/courses/:layout/edit/:courseId/:courseName/modules/:moduleId",
                        "/courses/:layout/edit/:courseId/:courseName/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/:courseName/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    ]}
                           exact={true}
                           render={(props) => <CourseEditor {...props}/>}/>
        {/*<div className="container-fluid">*/}
        {/*  <CourseManager/>*/}
        {/*  <CourseEditor/>*/}
                      <Route path="/courses/:courseId/quizzes" exact={true} component={QuizzesList}/>
                      <Route path="/courses/:courseId/quizzes/:quizId" exact={true} component={Quiz}/>
        {/*</div>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
