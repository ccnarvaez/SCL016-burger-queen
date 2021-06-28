
import logo from'../assets/logoCT.png'; 

// Billing section component

const Billing = () => {
  return (
    <>
      <div className ="billing-wrapper">
          <img src={logo} alt ="El logo" className="header-one"></img>
      </div>
      <div className ="billing-green-label">Factura</div>
      <div className ="billing-container">
          <div className= "billing-white">
            <div className ="billing-items">
                <div > Producto 
                  <div id="billing-items"></div>
                </div>
            </div>
      
            <div id= "items-order"> </div>

            <div className="billing-rederence-btn">
              <button className = "header-three"> Confirmar Pedido </button>
            </div>
        </div>
      </div>
    </> 
  );
}




export default Billing; 
