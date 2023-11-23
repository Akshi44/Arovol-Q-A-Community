import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import UsersList from './UsersList';
import './Users.css';
const Users = () => {
    const usersList = [
        {
          id:1,
          userName: "Akshita",
          },
        {
          id:2,
          userName: "Kumar",
           },
        {
          id:3,
          userName: "Priyanka",
          },
      ];
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className='users-h1'>Users</h1>
      <div className="users-list-container">
        {
          usersList.map((user, index) => (
            <UsersList user={user} key={index} />
          ))
        }
      </div>
      {/* <div className="home-container-2" style={{marginTop: "30px"}}>
        <h1 style={{fontWeight: "400"}}>Users</h1>
        <UsersList />
      </div> */}
      </div>
    </div>
  )
}

export default Users
