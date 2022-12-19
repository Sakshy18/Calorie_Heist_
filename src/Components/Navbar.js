import React from 'react'
import {Link} from "react-router-dom";
import {auth} from '../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
   

    let history = useHistory();
    let dispatch = useDispatch();
    const logOutHandler = () =>{
            auth.signOut();
            dispatch({
                type:"LOGOUT",
                payload:null
            })
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            history.push("/login");


    }
    let {user }= useSelector((state) => ({ ...state}));
    console.log(user,'user');
    return (

        <div>
        <nav className="nav1 navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
            <Link to='/' className="navbar-brand " style={{color: "white"}}>
                    <i>kcalofy</i>
            </Link>
     
  
            
            <ul className="nav justify-content-end">
                {!user && <Link to='/login' className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning" style={{color:"white"}}>Login</li>
                </Link>}

               {!user &&  <Link to='/signup'className="anchors">
                    <li className="nav-item-1 nav-link btn-outline-warning" style={{color: "white"}}>SignUp</li>
                </Link>}
               
            
                {user&& <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                    <Link to='/profile'>
                        <li className="dropdown-item">My Profile</li>
                    </Link>
                    <Link to='/dailyintake'>
                        <li className="dropdown-item">Calories Record</li>
                    </Link>
                        <li className="dropdown-item" onClick={logOutHandler}>LogOut</li>
                    </ul>
                </div>}

            </ul>
            </div>
        </nav>
        <ul className="nav justify-content-center m-1">

           
            <Link to='/' className="nav-link active" aria-current="page">
            <li className="nav-item" style={{color: "#e63946"}}>Home</li>
            </Link>           

            <Link to='/food' className="anchors">
            <li className="nav-item nav-link" style={{color: "#e63946"}}>Food</li>
            </Link>
            
            <Link to='/bmical'>
            <li className="nav-item nav-link" style={{color: "#e63946"}} >BMI Calculator</li>
            </Link>
            
            <Link to='/blog'>
            <li className="nav-item nav-link" style={{color: "#e63946"}} >Blog</li>       
            </Link>

            <Link to='/contact'>
            <li className="nav-item nav-link" style={{color: "#e63946"}} >Contact Us</li>       
            </Link>

        </ul>
    </div>
        
    )
}


