import Billing from './Billing.js';
import  MenuOptions from './MenuOptions';
import logo from'../assets/logoCT.png';
import KitchenRendered from './kitchen.js';

const Body = () => {
  return (
    <>
      <div className ="header-container">
        <img src={logo} alt ="El logo" className="header-one"></img>
        <div class = "header-wrapper">
          <button type= "button" className = "header-three" onClick = {KitchenRendered} >Ir a modo cocina</button>
        </div>
      </div>

      <div className="menu-global">
        <div> { MenuOptions() } </div>
        <div id="menu-options-space"></div>
        <div className= "billing-space"> { Billing() } </div>
      </div>
    </>
        
  );
}



export  default Body;
