
import react, { useEffect } from "react";
import { NavMenu } from './components/navmenu/NavMenu'
import Catalog from "./components/Catalog/Catalog";
import { Whiteblock } from "./components/whiteblock/Whiteblock";
import { Deliveryblock } from "./components/delivery/Deliveryblock";
import Maps from './components/Maps/Maps';
import { Mainblack } from './components/mainblack/Mainblack';
import Headfoot from "./components/Headfoot/Headfoot";





function App() {
  return (
    <div className="container">
      <Headfoot/>
      <NavMenu/>
      <Mainblack/>
      <Whiteblock/>
      <Catalog/>
      <Deliveryblock/>
      <Maps/>
      <Headfoot/>

    </div>


  );
}
export default App;
