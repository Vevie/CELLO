import React from "react";
import {NavBar} from './landing/Navbar' 
import {Banner} from './landing/Banner' 
import Services from  './landing/Services'
import Contact from './landing/Contact'
import Gromming from "./landing/Gromming";
import Footer from './landing/Footer';





const LandingPage = () => {

    return (
      <>
          <NavBar /> 
          <Banner />
          <Services />
          <Contact />
          <Gromming />
          <Footer />
      </>
    ); 
}

export default LandingPage;
