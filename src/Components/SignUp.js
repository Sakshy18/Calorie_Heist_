import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './signup.css'
import { auth } from '../firebase'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router';

export default function SignUp() {
  
 const history = useHistory();

  let {user }= useSelector((state) => ({ ...state}));
  if(user)
  history.push("/");

  const [email,setEmail] = useState("");


   const  onSubmitUser = async (event) =>{
    event.preventDefault();
    console.log(email);
  

    const config = {
      url:'http://localhost:3000/register/complete',
      handleCodeInApp:true
    }

    await auth.sendSignInLinkToEmail(email,config);
    toast(`Email send to ${email}`);
    window.localStorage.setItem('emailForReg',email);
    setEmail("");  
  }

  return (
    <div class="signup row">
     
      <div className="col-md-6 py-5" >
          <h2 className="text-center py-4">SIGNUP</h2>
          <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
          
          <form action="" method="post" onSubmit={onSubmitUser}>
  
              
              <div className="mb-3">
              <input required type="text" className="form-control py-2" placeholder="E-mail Address" name="Email"  onChange={(e) => setEmail(e.target.value)}/>
              </div>
  
            
  
              <div className="row">
                <div>
                  <button type="submit" className="btn btn-primary col-md-4">Signup</button>
                </div>
              </div>
          </form>
          <br/>
  
        </div>
      </div>
    </div>
  
  
    )
}






