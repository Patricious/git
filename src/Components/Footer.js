import React from "react";
import { SocialIcon } from 'react-social-icons';



import '../App.scss';


function Footer(){
    return(
        <div className="main-footer">
        <div className="container-1">
        <div className ="row">
        <div className="col-md-3 col-sm-6">
        <h4>
        <img src="./img/footer-logo.png" />
          People with color
        </h4>

        </div>

       <div className ="buttons">
       <SocialIcon network="twitter" bgColor="#ffffff" style={{ height: 25, width: 25 }}  />
       <SocialIcon network="facebook" bgColor="#ffffff" style={{ height: 25, width: 25 }}  />
      
       <SocialIcon network="instagram" bgColor="#ffffff" style={{ height: 25, width: 25 }}  />
      
       

       
       
       
       
     </div>

        
            
        </div>


        </div>

        </div>
    )
}

export default Footer;