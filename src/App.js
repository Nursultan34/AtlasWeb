
import react, { useEffect } from "react";
import './App.css';
import { Mainblack } from './components/mainblack/Mainblack';
import { NavMenu } from './components/navmenu/NavMenu'
import Catalog from "./components/Catalog/Catalog";
import { Whiteblock } from "./components/whiteblock/Whiteblock";
import { Deliveryblock } from "./components/delivery/Deliveryblock";
import {Routes, Route} from 'react-router-dom'
import Maps from './components/Maps/Maps';
<<<<<<< HEAD
import CardSecond from "./components/Catalog/Card/CardSecond";
=======
import Headfoot from "./components/Headfoot/Headfoot";
>>>>>>> 4c8b4389a9568a367a7f1d1ff2e0740570d4d8ec




function App() {
  return (
    <div className="container">
    
      <NavMenu/>
      <Mainblack />
      <Whiteblock/>
      <CardSecond/>
      <Deliveryblock/>
<<<<<<< HEAD
      {/* <Maps/> */}
=======
      <Maps/>
      <Headfoot/>
>>>>>>> 4c8b4389a9568a367a7f1d1ff2e0740570d4d8ec
    </div>


  );
}
export default App;
