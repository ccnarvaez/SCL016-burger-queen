import data from '../assets/data/data';
import AddFood from './AddFood';
import ReactDOM from 'react-dom';


const Food= () =>{

    const food = data.filter((chunk) =>{return chunk.menu === 'food'})
    const addingFood = () => {
        return (
          ReactDOM.render (<AddFood />, document.getElementById('billing-items'))
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
                    <div key={index} > {chunk.item} </div>  
                    <div key={chunk.id} > Costo : {chunk.price} </div>
                    <button type= "button"className = "header-three" onClick ={addingFood}> Agregar </button>
                  </div>
                </div>
              )
          })}
        </>
    )
}

export default Food;
