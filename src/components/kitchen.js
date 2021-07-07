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
           
            <ol> 
            <h3> Aqui se muestran las ordenes</h3>
            {orders.map((order, item)=> {
                return(
                    <>
                        <div className ="drinks-food-menu">
                            <div className = "drink-menu-options">
                                <ul key={order.id}> {order.item} 
                                    <li> <label> Precio: </label> {order.price} <label> $ </label> </li>
                                    <li> <label> Cantidad: </label> {order.quantity} </li>
                                    {/* <li> <label> Total: </label> {(order.price)*(order.quantity)} <label> $ </label> </li> */}
                                </ul>
                            </div> 
                        </div>
                    </>
                )
                })} 
                <button className = "header-three" onClick= {KitchenBack}> Volver </button>
            </ol>
            
            
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
