
import react, { useEffect } from "react";
import './App.css';
import { Mainblack } from './components/mainblack/Mainblack';
import { NavMenu } from './components/navmenu/NavMenu'
import Catalog from "./components/Catalog/Catalog";
import { Whiteblock } from "./components/whiteblock/Whiteblock";
import { Deliveryblock } from "./components/delivery/Deliveryblock";




function App() {
  return (
   

    <div className="container">
      <NavMenu/>
      <Mainblack />
      <Whiteblock/>
      <Catalog />
      <Deliveryblock/>
    </div>


  );
}
export default App;
