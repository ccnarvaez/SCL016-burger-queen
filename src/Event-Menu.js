import ReactDOM from 'react-dom';
import {DrinksMenu, FoodMenu} from './Components-Drinks-Food';

const showMenu1 = () => {
  return (
    ReactDOM.render(<DrinksMenu />, document.getElementById('menu-options-space'))
    );
}



const showMenu2 = () => {
  return (
    ReactDOM.render(<FoodMenu />, document.getElementById('menu-options-space'))
      
    );
}

export  {showMenu1, showMenu2}