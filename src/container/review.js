import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../CSS/review.css";
import Footer from "../component/footer";
import back2 from "../assets/back2.PNG"
import { Icon } from '@iconify/react';
import codeReview16 from '@iconify-icons/octicon/code-review-16';

export default class Review extends Component {
  render() {
    return (
      <>
      <div className="Review">
      <div  style={{
            
            justifyContent:"center",
            fontFamily:"Lexend Giga",
            backgroundColor:"whitesmoke",
            backgroundImage:`url(${back2})`,
            backgroundSize:"100% 100%",
            height:"100%",
            marginTop:"2%",
            padding:"6%"}}>
            
    <h1 data-aos="fade-up" style={{textAlign:"center", fontFamily:"Lexend Giga", fontWeight:"bolder"}}>TESTIMONIALS <Icon icon={codeReview16} /> </h1>
    <h4 data-aos="fade-down" style={{textAlign:"center", fontFamily:"Lexend Giga", fontWeight:"bolder"}}>Check out what other users think about our App :)</h4>
    
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz </h3>
            <p>
            Best App for Poultry business. Easily accessible and understandable features which makes it as the top app for poultry and boiler rate prices.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <p>
            Great facilities provided by this Poultry app. One can easily place order with best time supply.Thanks for catering us through this App.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <p>
            One of the best app for poultry business. 
Easily Understood features and the documentation of app is widely detailed which makes it best for use.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
    
    <Footer/>
  </>
    );
  }
}