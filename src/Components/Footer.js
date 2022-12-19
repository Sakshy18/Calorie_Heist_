import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="div-background row">
            
            <div className="col-3">
                     <h1 className="h1-class">Company</h1>
                     <ul>
                     <Link to='/' ><li style={{color: "#e63946"}}>Home</li></Link>
                     <Link to='/blog'><li style={{color: "#e63946"}}>Blog</li></Link>
                     <Link to='/contact'><li style={{color: "#e63946"}}>Contact Us</li></Link>
                     </ul>
            </div>
            <div className="col-5">
            <h1 className="h1-class">Tool</h1>
                     <ul>
                     <Link to='/bmical'><li style={{color: "#e63946"}}>BMI Calculator</li> </Link>                      
                     </ul>
            </div>
            <div className="col-3">
            <h1 className="h1-class">Join us</h1>
                     <ul>
                     <Link to='/login' className="anchors"><li style={{color: "#e63946"}}>Login</li></Link>
                     <Link to='/signup'className="anchors"> <li style={{color: "#e63946"}}>Signup</li></Link>                     
                     </ul>
            </div>
            <h3 style={{textAlign:'center' ,color: "#f5ebe0"}}>Made with ❤️ by Sakshi, Sweta and Affan</h3>
        </div>
    )
}
export default Footer;