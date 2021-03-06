import React from 'react';
import { Icon } from '@iconify/react';
import facebookRect from '@iconify/icons-brandico/facebook-rect';
import instagramIcon from '@iconify/icons-brandico/instagram';
import socialYoutube from '@iconify/icons-foundation/social-youtube';
import footer from "../assets/footer.jpg"


const Footer = ()=>{
    return(
        <div>
            <div  style={{backgroundColor:" #b33c00",backgroundSize:"100% 100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        backgroundImage:`url(${footer})`,
        color:"beige",
        padding:"2%"}} >
                <center>
                   <h2 style={{fontFamily:"Lexend Giga"}}>THE POULTRY APP</h2>
                </center>
                <br/>
                <h3 style={{fontFamily:"Lexend Giga",color:"beige",color:"black"}}>
                    Connect Us At:
                </h3>
                <p>
                <Icon icon={facebookRect}  style={{height: "60px", width:"40px"}}/>&nbsp;&nbsp;&nbsp;
                <Icon icon={instagramIcon} style={{height: "40px", width:"40px"}} />&nbsp;&nbsp;&nbsp;
                <Icon icon={socialYoutube} style={{height: "60px", width:"50px"}} />
            
                </p>
                
            </div>
            
        </div>
    )
}

export default Footer;