import './App.css';
import {Billing , MenuOptions}from './Components-Billing-Menu.js';
import logo from'./logoCT.png';



 const Header = () => {
  return (
 
      <div className ="header-container">
        <img src={logo} alt ="El logo" className="header-one"></img>
        <div class = "header-wrapper">
          <input type= "text" className = "header-name" placeholder="Escribe tu nombre para iniciar" >
          </input>
          <button type= "button" className = "header-three">Iniciar</button>
        </div>
      </div>
        
  );
}

const Menu = () => {
  return (
    <div className="menu-global">
      <div className= "billing-space"> { Billing() } </div>
      <div className ='menu-buttons-space'> { MenuOptions() } </div>
      <div id="menu-options-space"></div>
    </div>
  );
}



export  {Header, Menu};
