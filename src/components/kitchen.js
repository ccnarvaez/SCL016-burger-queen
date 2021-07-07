import ReactDOM from 'react-dom';
import {db} from '../index';
import Body from './Components';


const Kitchen = () => {
    return(
        <>
            <h1> Bienvenido a la cocina!</h1>
            <h3> Aqui se muestran las ordenes</h3>
            <button className = "btn-gen" onClick= {Orders}> Mostrar </button>
            <button className = "btn-gen" onClick= {KitchenBack}> Volver </button>
        </>
    )
}

const Orders = () => {
  
    db.collection('Order').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            console.log(data);  
        })
    })    
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