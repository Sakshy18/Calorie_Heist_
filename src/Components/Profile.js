import React from 'react'
import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import './Profile.css'
import axios from 'axios';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';


const updateProfile = async (authToken,name,about,bio,dob,height,weight,goal) => {
    


    return await axios.post('http://localhost:3001/api/complete-profile',{
     name:name,
     about:about,
     bio:bio,
     dob:dob,
     height:height,
     weight:weight,
     goal:goal,
    },{
      headers:{
        authtoken:authToken
      },
    })
  } 






export default  function Profile() {
 
    const history = useHistory();
    const [name,setName] = useState("");
    const [about,setAbout] = useState("");
    const [bio,setBio] = useState("");
    const [dob,setDob] = useState("");
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [goal,setGoal] = useState("");
   
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    
    if(!email)
    {
        history.push("/");}
   if(email){
    console.log(token);
   
   }

   useEffect(() =>{
     if(email){
    const apiUrl="http://localhost:3001/api/complete-profile";
        axios({
            method: 'POST',
            url: apiUrl,
            mode: 'cors',
            headers: {
             authtoken:token},
        },function(error, response, body) {
            // console.log(response.json());
            if(error) return console.error('Request failed:', error);
            else if(response.statusCode != 200) 
            return console.error('Error:', response.statusCode, body.toString('utf8'));
            else console.log(body)
        }).then((response) => {
            console.log(response.data)
            setName(response.data.name);
            setAbout(response.data.about);
            setBio(response.data.bio);
            setDob(response.data.dob);
            setHeight(response.data.height);
            setWeight(response.data.weight);
            setGoal(response.data.goal);
      
        });
    }

   },[email])

   const handleProfileUpdate = async (e) =>{
    e.preventDefault();
    try{
    
       
       updateProfile(token,name,about,bio,dob,height,weight,goal).then((res) => console.log("Updated")).catch((res) => console.log(res));
      
        toast.success("Profile Updated");

    }catch(err)
    {
      console.log(err,'error');
      toast.error(err.message);
    }

  };


    return (        
        <div className=" profile row">
        <div class="col-md-6"></div>
        <div className="col-md-6 py-4" >
        <h2 className="text-center">MY PROFILE</h2>
        <div className="col-md-6 col-12 form-inner pb-5 mx-auto">
            <form action="" method="post">
                <div className="mb-2">
                    <label for="Name" className="form-label">Name</label>
                    <input required type="text" className="form-control" name="Name" value={name} onChange ={(e) => setName(e.target.value)} />  
                </div>
                <div className="mb-2 ">
                    <label for="Email" className="form-label">E-mail Address</label>
                    <input required type="text" className="form-control" value={email}  name="Email" readOnly/>
                </div>
                
                <div className="mb-2">
                    <label for="About" className="form-label">About</label>
                    <input type="text" className="form-control"name="About" value={about}  onChange ={(e) => setAbout(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <label for="Bio" className="form-label">Bio</label>
                    <input type="text" className="form-control"name="Bio" value={bio} onChange ={(e) => setBio(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <label for="DOB" className="form-label">DOB</label>
                    <input type="date" className="form-control"name="DOB" value={dob} onChange ={(e) => setDob(e.target.value)}/>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-2">
                        <label for="Height" className="form-label">Height</label>
                        <input required type="text" className="form-control" value={height}  name="Height"  onChange ={(e) => setHeight(e.target.value)}/>
                    </div>

                    <div className="col-md-6 mb-2">
                        <label for="Weihgt" className="form-label">Weight</label>
                        <input required type="text" className="form-control" value={weight}  name="Weight"  onChange ={(e) => setWeight(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-2">
                    <label for="Goal" className="form-label">Goal</label>
                    <input type="text" className="form-control"name="Goal" value={goal}  onChange ={(e) => setGoal(e.target.value)}/>
                </div>
        
                <div className="row">           
                    <div  className="col-md-6">
                    <button type="submit" className="btn btn-primary" onClick={handleProfileUpdate}>Save Changes</button>
                    </div>
                </div>
         
            </form>
        </div>
        </div>
        </div> 
    )
}
