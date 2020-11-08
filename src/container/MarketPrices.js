import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import download from "../assets/download.jpg";
import m1 from "../assets/m1.PNG";
import m2 from "../assets/m2.PNG";
import m3 from "../assets/m3.PNG";
import m4 from "../assets/m4.PNG";
import m5 from "../assets/m5.PNG";
import m6 from "../assets/m6.PNG";
import m7 from "../assets/m7.PNG";
import m8 from "../assets/m8.PNG";
import  Icon from '@iconify/react';
import cartSupermarket from '@iconify-icons/ps/cart-supermarket';
import Footer from "../component/footer";


const MarketPrices = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
             <>
             <div className="Menu">
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    backgroundImage:`url(${download})`,
                    backgroundSize:"100% 100%",
                    height:"100%",
                    marginTop:"55px",
                    padding:"5%"}}>
                    
                <h1 data-aos="fade-up" style={{textAlign:"center",fontFamily:"Lexend Giga",color:"white"}}>MARKET PRICES <Icon icon={cartSupermarket} /> </h1>
                <h4 data-aos="fade-down" style={{textAlign:"center",fontFamily:"Lexend Giga",color:"white"}}>WE OFFER A WIDE VARIETY OF ITEMS. THE BOILER RATES ACROSS DIFFERENT CITIES ARE PROVIDED BELOW. </h4>
                <div  className="container-fluid " style={{margin:"2% 0"}}>
                <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                            <div  ></div>  
                            <img src={m1} data-aos="fade-right" alt="Menu image" height={400} width={265}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                            <img src={m2} data-aos="fade-right" alt="Menu image" height={400} width={265}/>&nbsp;&nbsp; 
                            </Col>
                        <Col md={6} xs={12}>
                        <img src={m3} data-aos="fade-left"  alt="Menu image" height={400} width={265}/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                            <img src={m4} data-aos="fade-left" alt="Menu image" height={400} width={265}/>
                            
                        </Col>
                    </Row><br></br>
                    <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                            <div  ></div>  
                            <img src={m5} data-aos="fade-right" alt="Menu image" height={400} width={265}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                            <img src={m6} data-aos="fade-right" alt="Menu image" height={400} width={265}/>&nbsp;&nbsp; 
                            </Col>
                        <Col md={6} xs={12}>
                        <img src={m7} data-aos="fade-left"  alt="Menu image" height={400} width={265}/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                            <img src={m8} data-aos="fade-left" alt="Menu image" height={400} width={265}/>
                            
                        </Col>
                    </Row>
                 </div>
                 </div>
                 </div>
                 <Footer/>
        </>
    )
}
export default MarketPrices;


