import React from 'react'
import './LeftSidebar.css'
import Globe from '../../assests/Globe.svg'
import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
  return (
	<div className='left-sidebar'>
		<nav className='side-nav'>
			<NavLink to='/' className='side-nav-links' activeClassName='active'>
				<p>Home</p>
			</NavLink>
			<div className="side-nav-div">
				<div>
					<p>Public</p>
				</div>
				<NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
					<img src={Globe} alt='Globe'/>
					<p style={{paddingLeft:'10px'}}>Question </p>
				</NavLink>
				<NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
					<p>Tags</p>
				</NavLink>
				<NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
					<p>Users</p>
				</NavLink>
				<NavLink to='/Companies' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
					<p>Companies</p>
				</NavLink>

			</div>
		</nav>
	</div>
  )
}
export default LeftSidebar
