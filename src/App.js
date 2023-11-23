import React, { useEffect } from 'react';
import { BrowserRouter as  Router} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar/Navbar';
import { fetchAllQuestions } from './actions/Question';
import { fetchAllUsers } from './actions/Users';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch (fetchAllQuestions)
    dispatch(fetchAllUsers)
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );  
}

export default App;
