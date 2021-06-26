
import MenuA from '../../assets/data/MenuA';
// ***DEPRECATED

const DrinksMenu = () => {

  return (
    <div className ="drinks-food-menu">
    <h1> Menu de Tecitos </h1>
      <div className = "drink-menu-options" >
        <div className = "drink-menu-one" id = "drink-menu-one"> { MenuA[0].item } </div>
        <div className = "drink-menu-two"> {MenuA[0].price}</div>
        <button type= "button"className = "header-three" >Agregar</button>
      </div>

      <div className = "drink-menu-options" >
        <div className = "drink-menu-one"> { MenuA[1].item } </div>
        <div className = "drink-menu-two"> { MenuA[1].price } </div>
        <button type= "button"className = "header-three" >Agregar</button>
      </div>

      <div className = "drink-menu-options" >
        <div className = "drink-menu-one"> { MenuA[2].item } </div>
        <div className = "drink-menu-two"> { MenuA[2].price } </div>
        <button type= "button"className = "header-three" >Agregar</button>
      </div>
    
    
    </div>
  );
}



export default  DrinksMenu;


