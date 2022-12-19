import React, {useEffect,useState} from 'react';
import axios from 'axios';
import DrinkCard from './DrinkCard';
import './Food.css';

export default  function Drink(){
   
    
    const[drink,setDrink] = useState();


     useEffect(() =>{
       
       const apiUrl="http://localhost:3001/api/drinks";
        axios({
               method: 'GET',
               url: apiUrl,
               mode: 'cors',
           },function(error, response, body) {
               // console.log(response.json());
               if(error) return console.error('Request failed:', error);
               else if(response.statusCode != 200) 
               return console.error('Error:', response.statusCode, body.toString('utf8'));
               else console.log(body)
           }).then((response) => {
               //console.log(response.data[0])
               setDrink(response.data);

               
              
         
           });
       
   
      },[])
   
 // console.log(drink);
 let loader=<div className="loader">Loading...</div>
    return drink ? ( 
    <div className="row">
    {
                drink && drink.map((element)=>(
                    
                    <div className="food-item-card col-4">
                        <DrinkCard
                        name={element['drinkName']}
                        cal={element['calories']}
                        />
                        
                    </div>
                ))
    }
  
    </div>
    ) : loader;

}