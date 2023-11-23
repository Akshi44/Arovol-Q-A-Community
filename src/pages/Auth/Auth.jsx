import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../assests/alogo.png'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/Auth.js'
const Auth = () => {
	const[isSignup,setisSignup]=useState(false)
	const[name,setName]=useState('')
	const[email,setEmail]=useState('')
	const[password,setPassword]=useState('')
	const navigate=useNavigate()
	const dispatch =useDispatch()

	const handleSwitch=()=>{ 
		setisSignup(!isSignup)
		}
		const handleSubmit=(e)=>{
			e.preventDefault()
			if(!email && !password)
			{
				alert("Enter name & password to continue")
			}
			if(isSignup)
			{
				if(!name)
				{
					alert("Enter a name to continue")
				}
				dispatch(signup({name,email,password},navigate))
			}
			else{
				dispatch(login({email,password},navigate))
			}
		}
	return (
		<section className='auth-section'>
		{isSignup && <AboutAuth/>}
			<div className="auth-container">
				{ <img src={icon} alt='Stackover-flow' className='login-logo' width={40} height={40} />}
				<form onSubmit={handleSubmit}>
				{
					isSignup && (
						<label htmlFor='name'>
							<h4 >Display Name</h4>
							<input type="name" name='name' id='name' onChange={(e)=>{setName(e.target.value)}} />
						</label>
					)
				}
					<label htmlFor="email">
						<h4>Email</h4>
						<input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
					</label>
					<label htmlFor="password">
						<div style={{display:'flex',justifyContent:'space-between'}}>
							<h4>Password</h4>
							{! isSignup && <p style={{color:'#007ac6',fontSize:'13px'}}>Forgot Password ?</p>}
						</div>
						<input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
					{ isSignup && <p style={{color:'#666767',fontSize:'13px'}}> Password must contain atleast eight characters <br/>including atleast 1 letter and 1 number.</p>}

					</label>
					{
					isSignup && (
						<label htmlFor='check'>
							<input type="checkbox" id='check' style={{marginTop: '-9px'}}/>
							<p style={{fontSize:'13px',marginTop: '-6px'}}>Opt-in to receive occasional product <br/>updates, user research invitations, company<br/> announcements, and digests.</p>
						</label>
					)
				}
					<button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
					{
					isSignup && (
						<p style={{color:'#666767',fontSize:'13px'}}>  
						By clicking “Sign up”, you agree to our
					  <span style={{color:'#007ac6'}}> terms of <br/> service</span>, 
						<span style={{color:'#007ac6'}}> privacy policy</span> and 
						<span style={{color:'#007ac6'}}> cookie policy</span></p>
						
					)
				}
				</form>
				<p style={{marginLeft: '40px',marginTop: '5px'}}>
					{isSignup ? 'Already have an account ?' : " Don't have an account ?"}
					<button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Log in' : 'Sign up'}</button>
				</p>
			</div>
		</section>
	)
}
export default Auth
