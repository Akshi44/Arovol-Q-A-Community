import React,{useState} from "react";
import { useParams, Link,useNavigate,useLocation} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import upvote from "../../assests/sort-up.svg";
import downvote from "../../assests/sort-down.svg";
// import moment from 'moment';
import copy from 'copy-to-clipboard';
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import { postAnswer,deleteQuestion,voteQuestion } from "../../actions/Question";
import DisplayAnswer from "./DisplayAnswer";
// import { useSelector } from "react-redux";
// const questionsLists = useSelector(state=>state.questionsReducer)

const QuestionsDetails = () => {
 
  const [Answer, setAnswer] = useState("");
  const User = useSelector((state) => (state.currentUserReducer));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const location=useLocation();
  const url = 'http://localhost:3000'
  // console.log(location)

  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (User === null) {
        alert('Login or Signup to answer a question')
        navigate('/Auth')
    }else {
        if (Answer === ''){
            alert('Enter an answer before submitting')
        }else {
            dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
        }
    } 
};
const handleShare = () => {
  copy(url+location.pathname)
  alert('Copied url : '+url+location.pathname)
};
const handleDelete = () => {
  dispatch(deleteQuestion(id, navigate))
}
const handleUpVote = () => {
  // dispatch(voteQuestion(id, 'upvotes', User.result._id))
  dispatch(voteQuestion(id, 'upvotes'))
}

const handleDownVote = () => {
  // dispatch(voteQuestion(id, 'downvotes', User.result._id))
  dispatch(voteQuestion(id, 'downvotes'))
}
  // console.log(id);
  var questionsList = [
    {
      _id: "1",
      votes: 1,  
      upvotes: 1,
      downvotes: 0,
      noOfAnswers: 1,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: [
        "java","javascript", "Ruby", "python", "C++", "C"
      ],
      userPosted: "Akshita",
      userId: 1,
      askedOn: "jan-1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan-3",
          userId: 2,
        },
      ],
    },
    {
      _id: "2",
      votes: 2,
      upvotes: 1,
      downvotes: 1,
      noOfAnswers: 0,
      questionTitle: "What is a Array?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "Kumar",
      askedOn: "jan-2",
      userId: 2,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Akshita",
          answeredOn: "jan-9",
          userId: 1,
        },
      ],
    },
    {
      _id: "3",
      votes: 1,
      upvotes: 1,
      downvotes: 5,
      noOfAnswers: 1,
      questionTitle: "What is a React-Router-dom?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "express js", "python"],
      userPosted: "Anup",
      askedOn: "Feb-1",
      userId: 3,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "Feb-2",
          userId: 2,
        },
      ],
    },
    {
      _id: "4",
      votes: 2,
      upvotes: 1,
      downvotes: 5,
      noOfAnswers: 3,
      questionTitle: "What is a Class?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "C++", "C", "Java"],
      userPosted: "Nikhil",
      askedOn: "Feb-1",
      userId: 4,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "Feb-2",
          userId: 2,
        },
      ],
    },
    {
      _id: "5",
      votes: 3,
      upvotes: 1,
      downvotes: 5,
      noOfAnswers: 2,
      questionTitle: "What is a Abstarction?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "C++", "C", "python", "Java"],
      userPosted: "mridul",
      askedOn: "Feb-1",
      userId: 5,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Agrawal",
          answeredOn: "Feb-2",
          userId: 3,
        },
      ],
    },
  ];
  // console.log(questionsList)

  return (
    <div className="question-details-page">
      {
      questionsList === null ? (
        <h1>Loading...</h1>
      ) : 
      (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key="question._id">
                {console.log(question)}
                <section className="question-details-container">
                  <h1>{question.questionTitle} </h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=" sortup"
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      {/* <p> {question.upvotes.length - question.downvotes.length}</p> */}
                      <p> {question.upvotes - question.downvotes}</p>
                      <img
                        src={downvote}
                        alt=" sortdown"
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          <button type="button">Delete</button>
                          {
                             User?.result?._id === question?.userId && (
                                <button type="button" onClick={handleDelete}>Delete</button>
                             )
                          }
                        </div>
                        <div>
                          {/* <p>asked on {(question.askedOn)}({moment(question.askedOn).fromNow()})</p> */}
                          <p>asked on {(question.askedOn)}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse Other Question Tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link to="/AskQuestion"style={{ textDecoration: "none", color: "#009dff" }}>
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default QuestionsDetails;
