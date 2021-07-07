import data from '../assets/data/data';
import AddFood from './AddFood';
import ReactDOM from 'react-dom';

const addingFood = (e) => {
   
  return (
    ReactDOM.render (
    <AddFood id={e.target.dataset.id} item={e.target.dataset.item} price={e.target.dataset.price}/>, document.getElementById('billing-items'))
  )
}

const Food= () =>{
    
    const food = data.filter((chunk) =>{return chunk.menu === 'food'})
    
    return (
        <>
        <div className="section-wrapper">
          <div className ="drinks-food-menu">
              <label className ="billing-green-label"> Menu de Acompañantes</label>
          </div>
        </div>
          {food.map((chunk, index) => {
            
              return (
                <div className="section-wrapper">
                  <div className ="drinks-food-menu">
                    <div className = "drink-menu-options" >
                      <ul key={index} > 
                        <li> Item: {chunk.item} </li>
                        <li> Costo : {chunk.price} $ </li>
                        <button type= "button" className = "btn-gen"  onClick ={addingFood} data-id={chunk.id} data-item={chunk.item} data-price={chunk.price}> Agregar </button>
                      </ul>  
                    </div>
                  </div>
                </div>
              )
          })}
        </>
    )
}

export default Food;
