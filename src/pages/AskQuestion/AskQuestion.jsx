import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import {askQuestion,} from '../../actions/Question.js'
const AskQuestion = () => { 
    const[questionTitle,setQuestionTitle]=useState(' ')
    const[questionBody,setQuestionBody]=useState(' ')
    const[questionTags,setQuestionTags]=useState(' ')
    const dispatch = useDispatch()
    const User = useSelector((state)=>(state.currentuserReducer))
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (User === null) {
            alert('Login or Signup to answer a question')
            navigate('/Auth')
        }else{
        // console.log({questionTitle,questionBody,questionTags})
        // dispatch (askQuestion({questionTitle,questionBody,questionTags, userPosted: User.result.name,userId: User?.result._id},navigate)) 
        dispatch (askQuestion({questionTitle,questionBody,questionTags, userPosted: User},navigate)) 
        }
    }
    const handleEnter=(e)=>{
       if(e.key === 'Enter')
        {
            setQuestionBody(questionBody+"\n")
        }
    }
  return (  
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a Public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person.</p>
                        <input type="text" id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g. is there an R function to finding the index of an element in a vector ? ' />
                    </label>
                    <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10"  onKeyDown={handleEnter} ></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" id="ask-ques-tags" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (xml typescript wordpress)'/>
                        </label>
                </div>
                <input type="submit" value='Review your Question' className='review-btn' />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion
 