
import {db} from '../index';
let order = [];


const Pay = async () => {

    let batch = db.batch();
    order.forEach((doc) => {
        let docRef = db.collection("Order").doc(); 
        batch.set(docRef, doc);
    })

    batch.commit();
    console.log('enviado a firebase');
}

const AddDrinks = (props) => {
    if (order.find(x => x.id === props.id)){
        let index = order.findIndex(x => x.id === props.id);
        order[index].quantity +=1; 
    }
    else{
        let item = {
            id:props.id,
            item: props.item,
            price: props.price,
            quantity: 1,
        };
        order.push(item);
    }
   
    console.log(order);   
    return (
        <>   
            {order.map((props) =>{
                return(
                    <>
                        <ul>
                            <li id = "item-item">{props.item} 
                                <ul id = "item-price">  <label> Precio: </label> {props.price} <label>$</label> </ul>
                                <ul id = "item-quantity">  <label> Cantidad: </label> {props.quantity} </ul>
                            </li>
                            
                        </ul>
                    </>
                )
            })}   
        
        <button  type="button"  className = "btn-gen" onClick={ Pay }> Pagar </button>
        </>   
    )
}


export  default AddDrinks;