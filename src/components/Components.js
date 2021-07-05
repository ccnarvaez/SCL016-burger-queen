import Billing from './Billing.js';
import  MenuOptions from './MenuOptions';
import logo from'../assets/logoCT.png';

 const Header = () => {
  return (
 
      <div className ="header-container">
        <img src={logo} alt ="El logo" className="header-one"></img>
        <div class = "header-wrapper">
          <button type= "button" className = "header-three">Ir a modo cocina</button>
        </div>
      </div>
        
  );
}

const Menu = () => {
  return (
    <div className="menu-global">
      <div> { MenuOptions() } </div>
      <div id="menu-options-space"></div>
      <div className= "billing-space"> { Billing() } </div>
    </div>
  );
}



export  {Header, Menu};
