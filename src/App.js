
import Catalog from "./components/Catalog/Catalog";
import { Deliveryblock } from "./components/delivery/Deliveryblock";
import Footer from './components/footer/Footer';
import Headfoot from "./components/Headfoot/Headfoot";
import { Mainblack } from './components/mainblack/Mainblack';
import Maps from './components/Maps/Maps';
import { Whiteblock } from "./components/whiteblock/Whiteblock";





function App() {
  return (
    <div className="container">
      <Headfoot/>
      <Mainblack/>
      <Whiteblock/>
      <Catalog/>
      <Deliveryblock/>
      <Maps/>
      <Footer/>
      
    </div>


  );
}
export default App;
