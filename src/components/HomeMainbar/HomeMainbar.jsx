import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
const HomeMainbar = () => {
	const location=useLocation()
	const user=1;
	// const user=null;
	const navigate=useNavigate()
	const questionsLists = useSelector(state=>state.questionsReducer)
	console.log(questionsLists)
 
	const checkAuth=()=>
	{
			if(user===null)
			{
				alert("Login or Signup to ask a question")
				navigate('/Auth')
			}
			else{
				navigate('/AskQuestion')
			}
	}

	var questionsList = [{
			_id: 1,
			votes:1,
			upvotes: 1,
			downvotes: 5,
			noOfAnswers: 1,
			questionTitle: "What is a function?",
			questionBody: "It meant to be",
			questionTags: ["java","javascript", "Ruby", "python", "C++", "C"],
			userPosted: "Akshita",
			userId: 1,
			askedOn: "jan-1",
			answer: [{
				answerBody: "Answer",
				userAnswered: "kumar",
				answeredOn : "jan-3",
				userId: 2,
			}]
	}
// ]
,{
			_id: 2,
			votes:0,
			upvotes: 1,
			downvotes: 1,
			noOfAnswers: 0,
			questionTitle: "What is a Array?",
			questionBody: "It meant to be",
			questionTags: ["javascript", "R", "python"],
			userPosted: "Kumar",
			askedOn: "jan-2",
			userId: 1,
			answer: [{
				answerBody: "Answer",
				userAnswered: "Akshita",
				answeredOn: "jan-9",
				userId: 2,
			}]
	},
{
			_id: 3,
			votes:1,
			upvotes: 6,
			downvotes: 5,
			noOfAnswers: 1,
			questionTitle: "What is a React-Router-dom?",
			questionBody: "It meant to be",
			questionTags: ["javascript", "R", "express js","python"],
			userPosted: "Priyanka",
			askedOn: "Feb-1",
			userId: 1,
			answer: [{
				answerBody: "Answer",
				userAnswered: "kumar",
				answeredOn: "Feb-2",
				userId: 2,
			}]
	},
	{
		_id: 4,
		votes:2,
		upvotes: 7,
		downvotes: 5,
		noOfAnswers: 3,
		questionTitle: "What is a Class?",
		questionBody: "It meant to be",
		questionTags: ["javascript", "C++", "C","Java"],
		userPosted: "kumar",
		askedOn: "Feb-1",
		userId: 1,
		answer: [{
			answerBody: "Answer",
			userAnswered: "Akshita",
			answeredOn: "Feb-2",
			userId: 2,
		}]
},
{
	_id: 5,
	votes:2,
	upvotes: 1,
	downvotes: 0,
	noOfAnswers: 2,
	questionTitle: "What is a Abstraction?",
	questionBody: "It meant to be",
	questionTags: ["javascript", "C++", "C","python","Java"],
	userPosted: "priyanka",
	askedOn: "Feb-1",
	userId: 1,
	answer: [{
		answerBody: "Answer",
		userAnswered: "Akshita",
		answeredOn: "Feb-2",
		userId: 2,
	}]
}]

	
	return (
		<div className='main-bar'>
			<div className="main-bar-header">
				{location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
				<button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
			</div>
			<div>
				{
					// questionsList.data === null ?
					questionsList === null ?
					<h1>Loading...</h1> :
					<>
						{/* <p>{questionsList.data.length} questions</p> */}
						<p>{questionsList.length} questions</p>
						{/* <QuestionList questionsList={questionsList.data}/> */}
						<QuestionList questionsList={questionsList}/>
					</>
				}
			</div>
		</div>
	)
}

export default HomeMainbar
