import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Companies from './pages/Companies/Companies'
import Users from './pages/Users/Users'
import Userprofile from './pages/Userprofile/Userprofile'
import User1 from './pages/Alluser/User1'
import User2 from './pages/Alluser/User2'
import User3 from './pages/Alluser/User3'
const AllRoutes = () => {
  return (
    <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/Auth" element={<Auth/>}/>
       <Route exact path="/Questions" element={<Questions/>}/>
       <Route exact path="/AskQuestion" element={<AskQuestion/>}/>
       <Route exact path="/Questions/:id" element={<DisplayQuestion/>}/>
       <Route exact path="/Tags" element={<Tags/>}/>
       <Route exact path="/Companies" element={<Companies/>}/>
       <Route exact path="/Users" element={<Users/>}/>
       <Route exact path="/Userprofile" element={<Userprofile/>}/>
       <Route exact path={`User/${1}`} element={<User1/>}/>
       <Route exact path={`User/${2}`} element={<User2/>}/>
       <Route exact path={`User/${3}`} element={<User3/>}/>
   

    </Routes>
  )
}
export default AllRoutes
