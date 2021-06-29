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
            <div className ="drinks-food-menu">
                <h1> Menu de Bebidas </h1>
            </div>
            {drinks.map((chunk, index) => {
                return (
                  
                  <div className ="drinks-food-menu">
                    <div className = "drink-menu-options" >

                      <div key={index} > 
                        <h3> {chunk.item} </h3> 
                        <h3> {chunk.price} </h3> 
                        <button type= "button"className = "header-three" onClick ={addingDrinks} data-id={chunk.id} data-item={chunk.item} data-price={chunk.price}> Agregar </button>
                      </div>  
                    
                      
                      
                    </div>
                  </div>
            
                )
            })}
        </>
    )
}

export default Drinks;
