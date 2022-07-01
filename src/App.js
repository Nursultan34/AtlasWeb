import React from 'react';
import './App.css';
import { Mainblack } from './components/mainblack/Mainblack';
import { NavMenu } from './components/navmenu/NavMenu'
import Catalog from "./components/Catalog/Catalog";
import { Whiteblock } from "./components/whiteblock/Whiteblock";
import { Deliveryblock } from "./components/delivery/Deliveryblock";
import {Routes, Route} from 'react-router-dom'
import Maps from './components/Maps/Maps';
import CardSecond from "./components/Catalog/Card/CardSecond";
import Headfoot from "./components/Headfoot/Headfoot";







function App() {
  return (
    <div className="container">
    
      <Headfoot/>
      <NavMenu/>
      <Mainblack />
      <Whiteblock/>
      <CardSecond/>
      <Catalog/>
      <Deliveryblock/>
      <Maps/>
      <Headfoot/>
      
      

    </div>


  );
}
export default App;
