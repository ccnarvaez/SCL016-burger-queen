import ReactDOM from 'react-dom';

const Quantity = () =>{

    const quantity = document.getElementById('item-quantity').value;
    const item = document.getElementById('item-item').textContent;
    const price = document.getElementById('item-price').textContent;
    
    
    const payment = parseInt(price) * parseInt(quantity);
    console.log(quantity, item, price, payment);

    return(
        <>
            <h5> Item: {item} </h5>
            <h5> Cantidad: {quantity} </h5>
            <h5> Precio unitario: {price} </h5>
            <h5> Total: {payment} </h5>
        </>
    )
}

const Addquantity = () =>{
    return (
        ReactDOM.render (<Quantity />, document.getElementById('items-order'))
          )
}
const AddFood = (props) => {
    
    return (
        <>
            
            <h4 id = "item-item"> {props.item} </h4>
            <h4 id = "item-price">  {props.price}  </h4>
            <input type="text" placeholder="Ingrese cantidad" id="item-quantity" className = "header-name"></input>
            <button type="button" className = "header-three" onClick={ Addquantity } data-id={props.id} data-item={props.item} data-price={props.price}> OK </button>
        </>
        
    )
}

export default AddFood