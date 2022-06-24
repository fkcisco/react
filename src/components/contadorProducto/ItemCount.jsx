import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
//import Intercambiabilidad from '../botones/Intercambiabilidad'
import './contadorProducto.css'




const Contador= ({stock, init, ident, onAdd}) => {
    
    const [ count, setCount ] = useState(parseFloat(init)) 
    

    const agregar = () => count < stock  &&  setCount(count + 1)
    const descontar = () => count >= 1  &&  setCount(count - 1)   

    const agregarCarrito = () => {
      onAdd(count)
    }
    
    return ( 
            <>     
            <div className="d-flex">
              <InputGroup className="mb-3 outline-secondary justify-content-between form-control p-0">
                <Button variant="primary" onClick={descontar}>-</Button>
                <p className='cantidad'>{stock === "0" ? "0" : count }</p>
                <Button variant="primary" onClick={agregar}>+</Button>
              </InputGroup>
              {stock === "0" ? 
                  <Button variant="danger" id={ident}>Sin Stock</Button> 
                  : 
                  <Button variant="outline-primary" onClick={agregarCarrito}>Agregar</Button>
                  //<Intercambiabilidad id={ ident } onAdd={count}/>
                  }                  
                  
            </div>

            </>        
)
}

export default Contador
