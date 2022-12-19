import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/LogIn";
import Navbar from "./Components/Navbar";
import Food from "./Components/Food";
import Drinks from "./Components/Drinks";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import BMIcal from "./Components/BMIcal";
import Footer from "./Components/Footer";
import DailyIntake from "./Components/DailyIntake";
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer } from 'react-toastify'
import RegisteComplete from "./Components/RegisterComplete";
import {auth} from './firebase';
import {useDispatch} from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(async (user) =>{
      if(user)
      {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user",user);
        dispatch({
          type:"LOGGED_IN_USER",
          payload:{
            email:user.email,
            token:idTokenResult.token,
          }
        })

      }
    });
    return () => unsubscribe();
  },[])



  return (
    <div>
    <ToastContainer />
    <Router>
    <Navbar/>
      <Switch>
        
        <Route exact path = "/">
        <div className="login">         
          <Home />
        </div>          
        </Route>

        <Route  path = "/bmical">
        <div className="login">               
          <BMIcal/>
        </div>        
        </Route>

        <Route  path = "/login">
        <div className="login">        
          <Login/>
        </div>          
        </Route>

        <Route exact path = "/signup">
        <div className="login">        
          <SignUp/>
        </div>         
        </Route>


        <Route exact path = "/food">
        <div className="login">
          <Food/>
        </div>         
        </Route>

        <Route exact path = "/drinks">
        <div className="login">
          <Drinks/>
        </div>         
        </Route>

        <Route exact path = "/contact">
        <div className="login">
          <Contact/>
        </div>         
        </Route>

        <Route exact path = "/blog">
        <div className="login">
          <Blog/>
        </div>         
        </Route>

        <Route exact path = "/profile">
        <div className="login">
          <Profile/>
        </div>         
        </Route>

        <Route exact path = "/dailyintake">
        <div className="login">
          <DailyIntake/>
        </div>         
        </Route>

        <Route exact path = "/register/complete">        
          <RegisteComplete />      
        </Route>

      </Switch>
     <Footer />
    </Router>
    </div>
  );
}



export default App;
