
import React, {useState} from "react";
import {Link} from "react-router-dom";

const TrueFalseQuestion = ({question}) => {
    const [selectAnswer, setselectAnswer] = useState('')
    const [highlight, setHighlight] = useState(false)
    const _submit = () => {
        setHighlight(true)
    }

    return(
        <div>
            <h4>
                {question.question}
                {
                    question.correct === selectAnswer  && highlight &&
                 <i className="fas fa-check mda-padded-icon float-right"></i>
                }
                {
                    (question.correct !== selectAnswer)  && highlight  &&
               <i className="fas fa-times mda-padded-icon-danger float-right"></i>
                }
            </h4>
            <span className="h6 mda-body-text">
            <ul className="list-group">
                <li className={`list-group-item
                        ${ (selectAnswer !== question.correct) && (selectAnswer === 'true') && highlight ? 'list-group-item-danger' : ''}
                        ${ (question.correct === 'true') && highlight ? 'list-group-item-success' : ''}`}>
                    <label>
                        <input
                            onClick={() => setselectAnswer('true')}
                            type="radio"
                            name={question._id}
                            className="mda-padded-radio-button"
                            disabled={highlight}
                        /> TRUE
                        {
                            (question.correct === 'true') && highlight &&
                            <i className="fas fa-check check-quiz"/>
                        }
                        {
                            (selectAnswer === 'true') && (question.correct !== selectAnswer) && highlight &&
                            <i className="fas fa-times check-quiz"/>
                        }
                    </label>
                </li>
                <li className={`list-group-item
                        ${(selectAnswer === 'false') && (selectAnswer !== question.correct) && highlight? 'list-group-item-danger' : ''}
                        ${(question.correct === 'false') && highlight? 'list-group-item-success' : ''}`}>
                    <label>
                        <input onClick={() => setselectAnswer('false')}
                               type="radio"
                               name={question._id}
                               className="mda-padded-radio-button"
                               disabled={highlight}
                        /> FALSE
                        {
                            (question.correct === 'false') && highlight &&
                            <i className="fas fa-check check-quiz"/>
                        }
                        {
                            (selectAnswer === 'false') && (question.correct !== selectAnswer) && highlight &&
                            <i className="fas fa-times check-quiz"/>
                        }
                    </label>
                </li>
            </ul>
            Your answer: {selectAnswer}
            <br/>
                </span>
                <div className="col-4 mda-center-in-div">
                    <button className="btn mda-btn"
                            onClick={_submit}>
                        Grade
                    </button>
                </div>
        </div>
    )
}

export default TrueFalseQuestion