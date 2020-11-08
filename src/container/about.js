import ShowMoreText from 'react-show-more-text';
import React , { Component } from "react";
import { Row,Col } from "react-bootstrap";
import about from "../assets/about.jpg";
import Footer from "../component/footer";
import Workdone from "./workdone";
import { Icon } from '@iconify/react';
import notePage from '@iconify-icons/emojione-v1/note-page';


export default class AboutUs extends Component {
   
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
   
    render() {
        return (
            <>
            <div className="container-fluid" id="about" style={{
                display:"flex",
                alignItems:"center",
                fontFamily:"Lexend Giga",
                flexDirection:"column",
                backgroundSize:"100% 100%",
                height:"100%",
                padding:"6%"}}>
            <h1 data-aos="fade-up" style={{textAlign:"center", color:"black",fontFamily:"Lexend Giga"}}>ABOUT US <Icon icon={notePage} style={{height: "60px", width:"40px"}}/> </h1>
            <div data-aos="fade-right" className="container-fluid " style={{margin:"2% 0", color:"black"}}>
            <Row>
                        <Col md={6} xs={12}>
                            <div style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%",height:"100%"}} ></div>
                        </Col>
                        <Col md={6} xs={12}>
            <ShowMoreText
                
                lines={14}
                more='Deep more'
                less='Deep less'
                anchorClass=''
                onClick={this.executeOnClick}
                expanded={false}
                width={390}
                
            >
              There’s a significant technological advancement and information technologies involved in every Industry these days. Our motto and intensions are just quite clear that we are here to educate the users, bringing awareness to the user in the field and market as well and the main goal is to digitalize the whole poultry broiler rate Industry. We provide the user a vast range of options to fulfil the needs of all the Industry to achieve the desired output at any level.
            </ShowMoreText>
            </Col>
         </Row>
         <Workdone/>
         
          </div>
         </div>
         
         <Footer/>
         </>
        );
    }
}