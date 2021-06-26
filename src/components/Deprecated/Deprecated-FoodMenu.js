import MenuB from '../../assets/data/MenuB';
 //** DEPRECATED**


const FoodMenu = () => {
 
 
  return (
    <>
    <div className ="drinks-food-menu">
      <h1> Menu de acompañantes </h1>
      <div className = "drink-menu-options" >
        <div className = "drink-menu-one"> {MenuB[0].item}</div>
        <div className = "drink-menu-two"> {MenuB[0].price} </div>
        <button type= "button"className = "header-three" >Agregar</button>
      </div>

      <div className = "drink-menu-options" >
        <div className = "drink-menu-one"> {MenuB[1].item}</div>
        <div className = "drink-menu-two"> {MenuB[1].price} </div>
        <button type= "button"className = "header-three" >Agregar</button>
      </div>

      <div className = "drink-menu-options" >
        <div className = "drink-menu-one"> {MenuB[2].item}</div>
        <div className = "drink-menu-two"> {MenuB[2].price} </div>
        <button type= "button"className = "header-three" >Agregar</button>
      </div>

    </div>
    
    </>
  );
}

export default  FoodMenu;