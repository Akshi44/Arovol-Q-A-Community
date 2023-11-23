import React from "react";
import { Link ,useParams} from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
// import moment from 'moment'
import { useSelector,useDispatch } from "react-redux";
import {deleteAnswer} from '../../actions/Question.js'

const DisplayAnswer = ({ question,handleShare }) => {
  const User = useSelector((state) => (state.currentUserReducer));
  const dispatch=useDispatch();
  const {id}= useParams();
  const handleDelete = (answerId,noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId,noOfAnswers-1))
  }
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          {/* <p>{ans.answerBody}</p> */}
          <p>Functions are "self contained" modules of code that accomplish a specific task.</p>
          <p> {ans.answer}</p>
          <div className="question-actions-user">
            <div>
                <button type="button"  onClick={handleShare}>Share</button>
                <button type="button">Delete</button>
                {
                  User?.result?._id === ans?.userId && (
                    <button type="button" onClick={() => handleDelete (ans._id, question.noOfAnswers)}>Delete</button>
                  )
                }
                
            </div>
            <div>
                {/* <p>Answered on {(ans.answeredOn)}({moment(ans.answeredOn).fromNow()})</p> */}
                <p>Answered on {(ans.answeredOn)}</p>
                <Link to={`/User/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                    <Avatar backgroundColor='green' px='8px' py='5px' >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                    <div>
                        {ans.userAnswered}
                    </div> 
                </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
