import React, {useState} from "react";
import {Link} from "react-router-dom";

const MultiChoiceQuestion = ({question}) => {
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
                    question.correct === selectAnswer && (selectAnswer !== '') && highlight &&
                     <i className="fas fa-check mda-padded-icon float-right"></i>

                }
                {
                    question.correct !== selectAnswer && (selectAnswer !== '') && highlight &&
                    <i className="fas fa-times mda-padded-icon-danger float-right"></i>
                }
            </h4>
            <ul className="list-group">
                {question.choices.map((choice) => {
                    return(
                        <li className={`list-group-item
                        ${ (selectAnswer !== question.correct) && (choice === selectAnswer) && highlight? 'list-group-item-danger' : ''}
                        ${ (choice === question.correct) && highlight? 'list-group-item-success' : ''}`}>
                            <label>
                                <input
                                    onClick={() => setselectAnswer(choice)}
                                    type="radio"

                                    name={question._id}
                                    disabled={highlight}
                                /> {choice}
                                <>
                                    {
                                        (question.correct === choice) && highlight &&
                                        <i className="fas fa-check check-quiz"/>
                                    }
                                    {
                                        (question.correct !== selectAnswer) && (choice === selectAnswer) && highlight &&
                                        <i className="fas fa-times check-quiz"/>
                                    }
                                </>

                            </label>
                        </li>

                    )
                })}

            </ul>
            <br/>
            <p>Your answer: {selectAnswer}</p>

                <div className="col-4 mda-center-in-div">
                    <button className="btn mda-btn"
                            onClick={_submit}>
                        Grade
                    </button>
                </div>
        </div>
    )
}

export default MultiChoiceQuestion;
