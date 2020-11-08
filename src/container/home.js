import React , { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutUs from "./about";
import Landing from "./Landing";
import ContactUs from "./contact";
import Service from "./Service";
import Navb from "./navbar";
import MarketPrices from "./MarketPrices";
import Review from "./review";
import User from "./user";
import { BrowserRouter,Route, Switch } from 'react-router-dom'


const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <>
           <BrowserRouter>
      <Navb />
      
        <Switch>
          <Route exact path="/">
            <Landing style={{backgroundColor:"#ffffb3"}} />
          </Route>
          <Route path="/about">
            <AboutUs />
            </Route>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/MarketPrices">
            <MarketPrices/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
        </Switch>
      
    </BrowserRouter>
    </>
    )
}


export default Home;