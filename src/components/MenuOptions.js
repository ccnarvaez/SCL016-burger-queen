import ReactDOM from 'react-dom';
import Food from './Food';
import Drinks from './Drinks';
import acompañantes from'../assets/acompañantes.jpg';
import bebidas from'../assets/bebidas.jpg';

// Food or drinks selection component

const showMenu1 = () => {
  return (
  ReactDOM.render (<Drinks />, document.getElementById('menu-options-space'))
    )
}

const showMenu2 = () => {
  return (
      ReactDOM.render(<Food />, document.getElementById('menu-options-space')) 
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

export default MenuOptions;