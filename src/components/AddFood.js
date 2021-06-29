
import {db} from '../index';

const Quantity = async (props) =>{
const item = document.getElementById('item-item').textContent;
const quantity = document.getElementById('item-quantity').value;
const price = document.getElementById('item-price').textContent;
const payment = parseInt(price) * parseInt(document.getElementById('item-quantity').value);

    return(
        await db.collection('Order').doc().set({
            item,
            quantity,
            price,
            payment
          }).then(alert('Order going up!'))
        
    )
}


const AddFood = (props) => {
    
    return (
        <>
            <h4 id = "item-item"> {props.item} </h4>
            <h4 id = "item-price">  {props.price}  </h4>
            <input type="text" placeholder="Ingrese cantidad" id="item-quantity" className = "header-name"></input>
            <button type="button" className = "header-three" onClick={ Quantity } data-id={props.id} data-item={props.item} data-price={props.price}> OK </button>
        </>   
    )
}

export  {AddFood, Quantity}