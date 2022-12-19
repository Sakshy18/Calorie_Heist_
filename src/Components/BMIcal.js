import React, {useEffect,useState} from 'react';
import './BMIcal.css'

export default function BMIcal() {
  const [Height,sethv] = useState()
  const [weight,sethw] = useState()
  const [bmi,setbmi] = useState();
  let Underweight="Underweight = <18.5 "; 
  let normal = "Normal weight = 18.5–24.9 ";
  let overweight = "Overweight = 25–29.9";
  let Obesity = "Obesity = 30 or greater";

  const calculate=()=>{
    console.log(Height,weight)
    let val = null
    if(Height>0 && weight>0){
      val=(weight*10000/(Height*Height)).toFixed(2);
    }
       
    setbmi(val);

  }
    return (
      <div class="bmi row">
        <div class="col-md-6"></div>
        <div className="col-md-6 py-1" >
            <h2 className="text-center pt-4 pb-2" style={{color: "#e63946"}}>BMI Calculator</h2>
            <div className="col-md-4 col-12 form-inner mx-auto">
            
                <div className="col-12 mb-2">
                    <label for="inputEmail4" className="form-label">Height (cm)</label>
                    <input 
                    onChange={(e)=> sethv(e.target.value)}
                     className="form-control" id="inputEmail4"/>
                </div>

                <div className="col-12 mb-2">
                    <label for="inputPassword4" className="form-label">Weight (kg)</label>
                    <input 
                     onChange={(e)=> sethw(e.target.value)}
                     className="form-control" id="inputPassword4"/>
                </div>
              
                <div className="row ">
                  <div>
                    <button type="submit" className="btn btn-danger "
                    onClick={()=> calculate()}
                    >Calculate</button>
                  </div> 
                </div>
                  <br/>
                  <div >
                  {bmi? <h3 className="bmiresult p-2">{bmi}</h3> : null
                  }
                  </div>
              
            <br/>
    
          </div>

          <div className="cat col-md-4 col-12 form-inner p-2 mx-auto text-center">
            <h4 style={{color: "#e63946"}} >BMI Categories</h4>
            <h6>{Underweight}</h6>
            <h6>{normal}</h6>
            <h6>{overweight}</h6>
            <h6>{Obesity}</h6>
          </div>

        </div>
      </div>
       
    )
}
