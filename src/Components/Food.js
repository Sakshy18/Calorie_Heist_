import React, {useEffect,useState} from 'react';
import axios from 'axios';
import FoodDetails from './FoodDetails';
import FooditemCard from './FooditemCard';
import './Food.css';
import { toast } from 'react-toastify'


const updateFoodIntake = async (authToken,date,mealid) => {
    


    var flag = 0;
    await axios.post('http://localhost:3001/api/intakeFood',{
     
     date:date,
     mealid:mealid,
    },{
      headers:{
        authtoken:authToken
      },
    }).then((err) =>{flag = 1;}).catch((err) => {flag = 2});

    if(flag == 1)
    toast.success("Added");
    else
    toast.error("Something wrong, Trying Log out and Login Again");


  } 


















export default function Food(){
    let query = '3lb carrots and a chicken sandwich and fries';
    const items = new Map();
    const userFoodData=[];
    const [data,setdata]=useState();
    const [qry,setqry] = useState(query);
    const [ cal,setcal] = useState(items);
    const [eatenfood,seteaten] = useState([]);
    console.log(query);
    useEffect(()=>{
        // const apiUrl=`https://api.calorieninjas.com/v1/nutrition?query=${qry}`;
        // axios({
        //     method: 'GET',
        //     url: apiUrl,
        //     mode: 'cors',
        //     headers: {
        // 'X-Api-Key':'Xrb1NEiAjSZc9yvEQykBNg==8KADYFa4P1NhV92q'},
        // },function(error, response, body) {
        //     // console.log(response.json());
        //     if(error) return console.error('Request failed:', error);
        //     else if(response.statusCode != 200) 
        //     return console.error('Error:', response.statusCode, body.toString('utf8'));
        //     else console.log(body)
        // }).then((response) => {
        //     console.log(response.data)
        //     setdata(response.data["items"]);
           
        // });

        axios.get("http://localhost:3001/api/food").then((res) => {
            console.log(res.data)
            setdata(res.data);

        });

    },[]);
    const dataHandler = ()=>{
        const apiUrl=`https://api.calorieninjas.com/v1/nutrition?query=${qry}`;
        axios({
            method: 'GET',
            url: apiUrl,
            mode: 'cors',
            headers: {
        'X-Api-Key':'Xrb1NEiAjSZc9yvEQykBNg==8KADYFa4P1NhV92q'},
        },function(error, response, body) {
            // console.log(response.json());
            if(error) return console.error('Request failed:', error);
            else if(response.statusCode != 200) 
            return console.error('Error:', response.statusCode, body.toString('utf8'));
            else console.log(body)
        }).then((response) => {
            console.log(response.data)
            setdata(response.data["dateNo"]);
           
        });
    }
    const updateFoodHandler = (id,name)=>{


        var date = new Date().toLocaleDateString("en-US");
        
       
        updateFoodIntake(localStorage.getItem('token'),date,name);

        let mp = new Map(cal);

        if(!(mp.has(id))){ 
            let newfood = [...eatenfood]
            newfood.push(name);
            seteaten(newfood);
        }
   
        mp.set(id,name);
        setcal(mp);
        Object.entries(cal).map((el)=>{
            console.log(el);
        })
       
        
        
        eatenfood.map((key,val)=> console.log(key))
        console.log(eatenfood)
    }
    console.log(data);
    console.log(cal);
    // console.log(eatenfood);
    let loader=<div className="loader">Loading...</div>
    let foodAdded=<div>
        <ul>
        {eatenfood.map((el)=>{
            <li>{el}</li>
        })}
        </ul>
    </div>
    
    return data ? (
        <div className="section">
            <div className="app col-12 mb-3">
                <input type="text" 
                className="form-control" id="inputEmail4"
                onChange={event=> setqry(event.target.value)}
                placeholder="What did you eat Today?"/>

             </div>
             <div className="app">
             <button className="btn btn-primary col-md"
               onClick={()=>dataHandler()}>Search</button>
             </div>
                       <div className="fooditems">
                           <ul>
                            {eatenfood.map((el)=>
                                 <li  className="fooditemsList">{el}</li>
                            )}
                            </ul>
                           
                        </div>
                             
             
            <div className="cards">
            {
                data && data.map((element,index)=>(
                    
                    <div className="food-item-card" key={index}>
                        <FooditemCard
                        name={element['name']}
                        cal={element['calories']}
                        carbs={element['carbohydrates_total_g']}
                        colestrol={element['cholesterol_mg']}
                        protein={element['protein_g']}
                        sugar={element['sugar_g']}
                        fat={element['fat_total_g']}
                        storeFood={(flag)=>{
                            if(flag)
                                updateFoodHandler(element["_id"],element['name'])
                            }
                        }

                        />
                        
                    </div>
                ))
            }
        </div>
        </div>
    ): loader;

}