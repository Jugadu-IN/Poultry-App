import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import UserCard from "../container/UserCard";
import { Card, Col, Row } from "react-bootstrap";
import classes from "../CSS/Service.module.css";
import Footer from "../component/footer";
import user from "../assets/user.png";
import  Icon from '@iconify/react';
import userCog from '@iconify-icons/fa-solid/user-cog';


const User = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div className="Facilities">
            <div className="container-fluid" id="collection" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            fontFamily:"Lexend Giga",
            backgroundImage:`url(${user})`,
            backgroundSize:"100% 100%",
            padding:"6%"}}>
            <br></br>
                <h1 data-aos="fade-up" style={{textAlign:"center",fontFamily:"Lexend Giga",padding:"20px",color:"green"}}>USERS <Icon icon={userCog} style={{height: "60px", width:"40px",color:"yellow"}}/> </h1>
                <h4 data-aos="fade-down" style={{textAlign:"center",marginBottom:"2%",fontFamily:"Lexend Giga",color:"black"}}>The prerequisite for the poultry broiler rate industry are the users. The involved parties that rear, trade, deal, market and provide final product to the customer is the User. We give you the revolutionary roles of every user involved in the Poultry App for better and effective performance within. Below we are briefly summarizing the roles of users. </h4>
                <br></br>
                <Row >
                {
                    UserCard.users.map((service)=>{
                       return(
                           <>
                            <Col data-aos="fade-right" md={6} xs={12} lg={4} style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            padding:0}}>
                            <Card className={classes.Card}>
                                <Card.Img variant="top" src={service.image} className={classes.Img} />
                                <Card.Header style={{textAlign:"center"}}>{service.header} </Card.Header>
                                <Card.Body>
                                    
                                    <Card.Header style={{textAlign:"center"}}>{service.title} </Card.Header>
                                </Card.Body>
                            </Card>
                        </Col>
                           </>
                       )
                    })
                }
                </Row>
            </div>
            </div> 
            <Footer/>
        </>
    )
}

export default User;