import * as api from '../api';
import { setCurrentUser } from './currentUser.js';
export const signup= (authData, navigate) => async (dispatch) =>{
    try{ 
        const {data}=await api.signUp(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))) )
        navigate('/')
    }catch(error){
        console.log(error)
    } 
};
export const login = (authData, navigate) => async (dispatch) =>{
    try{ 
        const {data}=await api.logIn(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))) )
        navigate('/')
    }catch(error){
        console.log(error)
    }
};

// import React from 'react';
// export class signup {
//   signup = async () => {
//     const authData = {}; // Add your authData object here
//     try {
//       const { data } = await api.signUp(authData);
//       this.props.dispatch({ type: 'AUTH', data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   render() {
//     return (
//       <div>
//         {/* Your component JSX */}
//         {/* <button onClick={this.signup}>Sign Up</button> */}
//         {this.signup}
//       </div>
//     );
//   }
// };


// export class login {
//   login = async () => {
//     const authData = {}; // Add your authData object here
//     try {
//       const { data } = await api.logIn(authData);
//       this.props.dispatch({ type: 'AUTH', data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   render() {
//     return (
//       <div>
//         {/* Your component JSX */}
//         {this.login}
//         {/* <button onClick={this.signup}>Sign Up</button> */}
//       </div>
//     );
//   }
// };
// export  {Signup ,login}



