import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import farm from "../assets/farm.jpg"
import { Icon } from '@iconify/react';
import fourLeafClover from '@iconify-icons/emojione/four-leaf-clover';
import farmerLightSkinTone from '@iconify-icons/noto/farmer-light-skin-tone';
import sunWithFace from '@iconify-icons/noto-v1/sun-with-face';
import deciduousTree from '@iconify-icons/emojione/deciduous-tree';

const WorkDone = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
             <>
             
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    backgroundImage:`url(${farm})`,
                    backgroundSize:"100% 100%",
                    marginTop:"55px",
                    padding:"5%"}}>
                    
                <div  className="container-fluid "  data-aos="fade-left" style={{margin:"2% 0"}}>
                
                <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                        
                            <div  ></div> 
                             <h2 style={{color:"#80ffff"}}>01</h2>
                             <h3 style={{color:"white",fontFamily:"Lexend Giga" }} >Natural Feed <Icon icon={fourLeafClover}  style={{height: "70px", width:"60px"}} /></h3><br></br>
                             <h2 style={{color:"#80ffff"}}>02</h2>
                             <h3 style={{color:"white",fontFamily:"Lexend Giga", }}>Modern Farm <Icon icon={farmerLightSkinTone}   style={{height: "70px", width:"60px"}} /> </h3>
                            </Col>
                        <Col md={6} xs={12}>
                        
                        <h2 style={{color:"#80ffff" }} >03</h2>
                             <h3 style={{color:"white",fontFamily:"Lexend Giga",}} >Own Fields <Icon icon={deciduousTree}  style={{height: "70px", width:"60px"}} /></h3><br></br>
                             <h2 style={{color:"#80ffff"}}>04</h2>
                             <h3 style={{color:"white",fontFamily:"Lexend Giga", }} >100% Organic <Icon icon={sunWithFace}  style={{height: "70px", width:"60px"}} /></h3>
                        </Col>
                        
                    </Row>
                 </div>
                 </div>
                 
        </>
    )
}
export default WorkDone;


