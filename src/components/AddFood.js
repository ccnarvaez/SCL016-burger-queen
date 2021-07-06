
import {db} from '../index';
let order = [];

const Quantity = async (order) =>{

    let batch = db.batch();
    order.forEach((doc) => {
        var docRef = db.collection("Order").doc(); //automatically generate unique id
        batch.set(docRef, doc);
      });

      batch.commit();
    // const item = document.getElementById('item-item').textContent;
    // const quantity = document.getElementById('item-quantity').value;
    // const price = document.getElementById('item-price').textContent;
    // const payment = parseInt(price) * parseInt(document.getElementById('item-quantity').value);



    // return(
    //     await db.collection('Order').doc().set({
    //         item,
    //         quantity,
    //         price,
    //         payment
    //       }).then(alert('Order going up!'))
        
    // )
}

const handleClick = () => {
    console.log('Se hizo click');
}

const Pay = async () => {

    let batch = db.batch();
    order.forEach((doc) => {
        let docRef = db.collection("Order").doc(); //automatically generate unique id
        batch.set(docRef, doc);
    });

    batch.commit();
    console.log('guarde');
}

const AddFood = (props) => {
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
        
        <button  type="button"  className = "btn-gen" onClick={ handleClick() }> Pagar </button>
        </>   
    )
}

export  default AddFood;