import ReactDOM from 'react-dom';
import Food from './Food';
import Drinks from './Drinks';
import postres from'../assets/postres.jpg';
import taza from'../assets/taza.jpg';

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
    <div className= "section-wrapper">
      <div className = "drinks-food-menu">
        <label className ="billing-green-label"> Elige tu menú </label>
      </div>
      <div className = "menu-container2">
        <div className = "menu-wrapper">
          <img className="menu-one" src={taza} alt ="bebidas"id="menu-one"></img>
          <button className = "menu-options1" onClick={showMenu1} > Bebidas </button>
        </div>
        </div>
        <div className = "menu-container2">
        <div className = "menu-wrapper">
          <img className="menu-two" src={postres} alt ="acompañantes"></img>
          <button className ="menu-options1" onClick={showMenu2}> Acompañantes </button>
        </div>
      </div>
    </div>
      
  )
}

export default MenuOptions;