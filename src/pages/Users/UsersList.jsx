import React from 'react'
import './Users.css';
import { Link } from 'react-router-dom';

const UsersList = ({ user }) => {
  return (
    <div className='user'>
         <Link to={`/User/${user.id}`} className='user-profile-link'>
        <h3>{ user.userName.charAt(0).toUpperCase() }</h3>
        <h5>{ user.userName }</h5>
    </Link>
    </div>
  )
}

export default UsersList