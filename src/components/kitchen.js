import ReactDOM from 'react-dom';
import {db} from '../index';
import Body from './Components';
import React, { useState, useEffect } from 'react';




const Kitchen = () => {
    let [orders, setOrders] = useState([]); 
    useEffect(() => {
        
        db.collection('Order').onSnapshot((snapshot) => {
            setOrders(snapshot.docs.map(doc => doc.data())); 
            // console.log(setOrders);
        })   
    }, [orders]);

    return(
        <>
            <h1> Bienvenido a la cocina!</h1>
            <h3> Aqui se muestran las ordenes</h3>
            <ol> 
            {orders.map((order, item)=> {
                    return(
                        <>
                            <li key={order.id}> {order.item} 
                                <ul> <label> Precio: </label> {order.price} <label> $ </label> </ul>
                                <ul> <label> Cantidad: </label> {order.quantity} </ul>
                                {/* <ul> <label> Total: </label> {(order.price)*(order.quantity)} <label> $ </label> </ul> */}
                            </li>   
                        </>
                    )
                })} 
            </ol>
            
            <button className = "btn-gen" onClick= {KitchenBack}> Volver </button>
        </>
    )
}

const KitchenRendered = () =>{
    
    return (
        ReactDOM.render (<Kitchen />, document.getElementById('root'))
    )
}

const KitchenBack = () =>{
    return (
        ReactDOM.render (<Body />, document.getElementById('root'))   
    )  
}

export default KitchenRendered;
