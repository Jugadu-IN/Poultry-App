import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Content from "../container/services";
import { Card, Col, Row } from "react-bootstrap";
import classes from "../CSS/Service.module.css";
import Footer from "../component/footer";
import back from "../assets/back.jpg";
import { Icon } from '@iconify/react';
import servicesIcon from '@iconify-icons/flat-color-icons/services';



const Service = ()=>{
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
            backgroundImage:`url(${back})`,
            backgroundSize:"100% 100%",
            backgroundColor:"whitesmoke",
            padding:"6%"}}>
            <br></br>
                <h1 data-aos="fade-up" style={{textAlign:"center",marginBottom:"2%",fontFamily:"Lexend Giga",padding:"20px",color:"yellow"}}>OUR SERVICES <Icon icon={servicesIcon} style={{height: "60px", width:"40px"}} /> </h1>
                <Row >
                {
                    Content.services.map((service)=>{
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
                                    
                                    <Card.Header >{service.title} </Card.Header>
                                    
                                
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
export default Service;