import React, { useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './signup.css'
import { auth } from '../firebase'
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';


const createOrUpdateBackend = async (authToken) =>{

  return await axios.post('http://localhost:3001/api/create-user',{},{
    headers:{
      authToken:authToken
    },
  })
} 


export default function LogIn() {
  const history = useHistory();

  let {user }= useSelector((state) => ({ ...state}));
  console.log(user);
  if(user)
  history.push("/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  
 



    const handleLogIn = async (e) =>{
      e.preventDefault();
      console.log(email,password);
      try{
         const result=  await auth.signInWithEmailAndPassword(email,password);
         console.log("Result",result);
         const {user} = result;
         const idTokenResult = await user.getIdTokenResult();
         createOrUpdateBackend(idTokenResult.token).then((res) => console.log("Created")).catch((res) => console.log(res));
        
          dispatch({
          type:"LOGGED_IN_USER",
          payload:{
            email:user.email,
            token:idTokenResult.token,
          }
        })
        localStorage.setItem('email',user.email);
        localStorage.setItem('token',idTokenResult.token);
        
        history.push("/");

      }catch(err)
      {
        console.log(err,'error');
        toast.error(err.message);
      }

    };
    return (
      <div class="signup row">       
        <div className="col-md-6 py-5" >
            <h2 className="text-center py-4">LOGIN</h2>
            <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
            
            <div action="" method="post">
    
                <div className="mb-3">
                  <input required type="text" className="form-control py-2" placeholder="E-mail Address" name="Email"  onChange={(e) => setEmail(e.target.value)}/>
                </div>
    
                <div className="mb-3">
                  <input required type="text" className="form-control py-2" placeholder="Password" name="Password"  onChange ={(e) => setPassword(e.target.value)}/>
                </div>
              
                <div className="row">
                  <div>
                    <button type="submit" onClick = {handleLogIn} className="btn btn-primary col-md-3" style={{color: "white"}}>Login </button>
                  </div>
                </div>
            </div>
            <br/>
    
          </div>
        </div>
    </div>)
}




