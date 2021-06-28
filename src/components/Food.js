import data from '../assets/data/data';
import AddFood from './AddFood';
import ReactDOM from 'react-dom';


const Food= () =>{
    
    const food = data.filter((chunk) =>{return chunk.menu === 'food'})
    const addingFood = (e) => {
   
        return (
          ReactDOM.render (
          <AddFood id={e.target.dataset.id} item={e.target.dataset.item} price={e.target.dataset.price}/>, document.getElementById('billing-items'))
        )
    }
    
    
    return (
        <>
          <div className ="drinks-food-menu">
              <h1> Menu de Acompañantes</h1>
          </div>
          {food.map((chunk, index) => {
            
              return (
          
                <div className ="drinks-food-menu">
                  <div className = "drink-menu-options" >
                    <div key={index} > 
                      <h3 > {chunk.item} Costo : {chunk.price} US </h3>
                      <button type= "button"className = "header-three" onClick ={addingFood} data-id={chunk.id} data-item={chunk.item} data-price={chunk.price}> Agregar </button>
                    </div>  
                   
                  </div>
                </div>
              )
          })}
        </>
    )
}

export default Food;
