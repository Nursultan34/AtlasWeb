
import './App.css';
import { Mainblack } from './components/Mainblack';
import { NavMenu } from './components/NavMenu';
import react,{useEffect} from "react";
import Catalog from "./components/Catalog/Catalog";
import './App.css'




function App() {
  return (

    <div className="App">
    <NavMenu/>
    <Mainblack/>
    </div>
   

    <div className="container">
      
     <Catalog/>
     
    </div>


  );
}
export default App;
