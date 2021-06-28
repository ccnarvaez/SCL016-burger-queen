const quantity = () =>{
    const quantity = document.getElementById('item-quantity').value;
    const item = document.getElementById('item-item').textContent;
    const price = document.getElementById('item-price').textContent;

    return(
        <>
            <h5> {item} </h5>
            <h5> {quantity} </h5>
            <h5> {price} </h5>
        </>
    )
    

}

const AddFood = (props) => {
    
    return (
        <>
            <h4 id="item-item">  {props.item} </h4>
            <h4 id="item-price">  {props.price} </h4>
            <input type="text" placeholder="Ingrese cantidad" id="item-quantity" className = "header-name"></input>
            <button type="button" className = "header-three" onClick={quantity} data-id={props.id} data-item={props.item} data-price={props.price}> OK </button>
        </>
        
    )
}

export default AddFood