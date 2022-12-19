import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { auth } from '../firebase'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import axios from 'axios';




const createOrUpdateBackend = async (authToken) =>{

  return await axios.post('http://localhost:3001/api/create-user',{},{
    headers:{
      authToken:authToken
    },
  })
} 







export default function RegisteComplete() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let {user }= useSelector((state) => ({ ...state}));
  if(user)
  history.push("/");

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForReg'));
  }, [])

  let dispatch = useDispatch();




  const onSubmitUser = async (event) => {

    if (!email || !password) {
      toast.error("Not valid email or password");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters"); return;
    }

    try {
      const result = await auth.signInWithEmailLink(email, window.location.href);

      if (result.user.emailVerified) {
        window.localStorage.removeItem('emailForReg');
        let user = auth.currentUser;
        await user.updatePassword(password);
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

        // redux store
        console.log(idTokenResult);

        // redirect

      

      }
    }
    catch (error) {
      console.log(error + "ERROR");
      toast.error(error.message);
    }
  }


 

















  return (
    <div class="mt-3 pt-3">

      <div class=" py-5" >
        <h2 class="text-center py-4">Complete your Registration</h2>
        <div class="col-md-4 col-12 form-inner pb-5 px-5 mx-auto">

          <div action="">

            <div class="mb-3">
              <input required type="text" value={email} disabled class="form-control py-2" placeholder="E-mail Address" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
              <input required type="text" class="form-control py-2" placeholder="Password" name="password" autoFocus onChange={(e) => setPassword(e.target.value)} />
            </div>


            <div class="row">
              <div>
                <button type="submit" onClick={onSubmitUser} class="btn btn-primary col-md-4">Update Password</button>
              </div>
            </div>
          </div>
          <br />

        </div>
      </div>
    </div>

  )
}
