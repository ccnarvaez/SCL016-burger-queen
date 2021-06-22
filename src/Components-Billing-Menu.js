import './App.css';
import logo from'./logoCT.png'; 
import acompañantes from'./acompañantes.jpg';
import bebidas from'./bebidas.jpg';
import {showMenu1, showMenu2} from './Event-Menu';


const Billing = () =>{
  return (
    <>
      <div className ="billing-wrapper">
          <img src={logo} alt ="El logo" className="header-one"></img>
      </div>

      <div className ="billing-green-label">Factura</div>

      <div className ="billing-container">
          <div className= "billing-white">
            <div className ="billing-items">
                <div> Item </div>
                <div> Cantidad </div>
                <div> Precio </div>
            </div>
            <div className="billing-rederence-btn">
              <button className = "header-three"> Confirmar Pedido </button>
            </div>
        </div>
      </div>
    </> 
  );
}

const MenuOptions = () => {
  return(
      <div className = "menu-container2">
        <div className = "menu-wrapper">
          <img src={bebidas} alt ="bebidas"className="menu-one" id="menu-one"></img>
          <button className = "menu-options1" onClick={showMenu1} > Bebidas </button>
        </div>
        <div className = "menu-wrapper">
          <img src={acompañantes} alt ="acompañantes"className="menu-two"></img>
          <button className ="menu-options1" onClick={showMenu2}> Acompañantes </button>
        </div>
      </div>
  )
}




export {Billing, MenuOptions}; 
