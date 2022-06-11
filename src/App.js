
import react, { useEffect } from "react";
import './App.css';
import { NavMenu } from './components/navmenu/NavMenu'
import Catalog from "./components/Catalog/Catalog";
import { Whiteblock } from "./components/whiteblock/Whiteblock";
import { Deliveryblock } from "./components/delivery/Deliveryblock";
import {Routes, Route} from 'react-router-dom'
import Maps from './components/Maps/Maps';
import { Mainblack } from './components/mainblack/Mainblack';




function App() {
  return (
    <div className="container">
      <NavMenu/>
      <Mainblack/>
      <Whiteblock/>
      <Catalog/>
      <Deliveryblock/>
      <Maps/>
    </div>


  );
}
export default App;
