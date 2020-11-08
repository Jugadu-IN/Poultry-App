import React from "react";
import process from '../assets/process.PNG';
import * as ReactBootStrap from "react-bootstrap";
import "./style.css";
import "./w3.css"
import  Icon  from '@iconify/react';
import chickenIcon from '@iconify-icons/emojione/chicken';
import { ReactComponent as Logo } from '../assets/logo.svg';
import main from "../assets/main.jpg";

function Landing(){
 return (
 <>
 <div className="container-fluid" id="about" style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                backgroundImage:`url(${main})`,
                backgroundSize:"100% 100%",
                padding:"6%"}}>
<div className="container" >

<div className="row">
    <div className="col-6"><br></br><br></br>
    <h1  className="Heading w3-animate-left" >Poultry<br /> App <Icon icon={chickenIcon} /></h1>   
    <div>
  <p className="content w3-animate-left" style={{color:"white",fontSize:"20px"}}>Our Motto and intensions are just quite clear.<br /> We are here to educate users, bringing awareness to users in the Poultry Boiler rate industry.We provide the user a vast range of options to fulfil the needs of all the Industry to achieve the desired output at any level.
</p> 
<img className="w3-animate-left"  src={process} style={{height:"250px",paddingTop:"100px"}} />
</div> 
<div>
<ReactBootStrap.Button className="w3-animate-left" style={{backgroundColor:"#ff8c1a",fontSize:"14px", padding: "30px 56px", lineHeight: "0",marginTop:"40px", fontFamily:"Lexend Giga"}} size="lg" >Contact Us</ReactBootStrap.Button>{' '}
</div>
    </div>
   <div className="col-6"><br></br>
   
  <Logo className="w3-animate-right " style={{height:"480px",paddingTop:"100px",paddingLeft:"25px"}}/>
   </div> 
</div>
</div>
</div>

</>
)
}


export default Landing;
