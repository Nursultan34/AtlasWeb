
import React from 'react';
import './App.css';
import Catalog from "./components/Catalog/Catalog";
import { Deliveryblock } from "./components/delivery/Deliveryblock";
import Headfoot from "./components/Headfoot/Headfoot";
import { Mainblack } from './components/mainblack/Mainblack';
import Maps from './components/Maps/Maps';
import { Whiteblock } from "./components/whiteblock/Whiteblock";
import CardSecond from './components/Catalog/Card/CardSecond';
import Footer from './components/footer/Footer';





function App() {
  return (
    <div >
    
      <Headfoot/>
      <Mainblack/>
      <Whiteblock/>
      <CardSecond/>
      <Catalog/>
      <Deliveryblock/>
      <Maps/>
      <Footer/>
    

    </div>


  );
}
export default App;
