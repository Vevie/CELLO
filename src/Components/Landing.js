import React from "react";
import {NavBar} from './Navbar' 
import {Banner} from './Banner' 
import Services from  './Services'
import Contact from './Contact'
import Gromming from "./Gromming";
import Footer from './Footer'




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
