import data from '../assets/data/data';
import AddDrinks from './AddDrinks';
import ReactDOM from 'react-dom';

const Drinks= () =>{

    const drinks = data.filter((chunk) =>{return chunk.menu === 'drinks'})
    const addingDrinks= (e) => {
   
      return (
        ReactDOM.render (
        <AddDrinks id={e.target.dataset.id} item={e.target.dataset.item} price={e.target.dataset.price}/>, document.getElementById('billing-items'))
      )
  }
    
    return (
        <>
        <div className="section-wrapper">
            <div className ="drinks-food-menu">
                <label className ="billing-green-label"> Menu de Bebidas </label>
            </div>
          </div>
            {drinks.map((chunk, index) => {
                return (
                <div className="section-wrapper"> 
                  <div className ="drinks-food-menu">
                    <div className = "drink-menu-options">
                      <ul key={index} > 
                        <li> Item: {chunk.item} </li> 
                        <li> Costo: {chunk.price} $ </li> 
                        <button type= "button" className = "btn-gen" onClick ={addingDrinks} data-id={chunk.id} data-item={chunk.item} data-price={chunk.price}> Agregar </button>
                      </ul>  
                    </div>
                  </div>
                </div>
            
                )
            })}
        </>
    )
}

export default Drinks;
