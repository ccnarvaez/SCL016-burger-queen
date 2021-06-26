import data from '../assets/data/data';


const Drinks= () =>{

    const drinks = data.filter((chunk) =>{return chunk.menu === 'drinks'})
    
    
    return (
        <>
            <div className ="drinks-food-menu">
                <h1> Menu de Bebidas </h1>
            </div>
            {drinks.map((chunk, index) => {
                return (
                  
                  <div className ="drinks-food-menu">
                    <div className = "drink-menu-options" >

                      <div key={index} > {chunk.item} </div>  
                      <div key={chunk.id} > Costo : {chunk.price} </div>
                      
                      <button type= "button"className = "header-three"> Agregar </button>
                    </div>
                  </div>
            
                )
            })}
        </>
    )
}

export default Drinks;
