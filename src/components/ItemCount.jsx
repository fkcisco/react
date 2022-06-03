import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

    const Contador= ({stock, init, producto, ident}) => {

    const [ count, modificarCount ] = useState(parseFloat(init))
  
    function agregar() {
        if((count < stock)){          
          modificarCount(count + 1)
        }
    }
    function descontar() {
        if(count >= 1){
          modificarCount(count - 1)
      }
  }  
    return (
    
        <div className="container">          
          <div className="col-4 mx-auto">
          <div className="card p-5 w-30">
            <p>{producto}</p>            
            <InputGroup className="mb-3 outline-secondary justify-content-between form-control p-0">
            <Button variant="primary" onClick={descontar}>-</Button>
            <p className='cantidad'>{stock === "0" ? "0" : count }</p>
            <Button variant="primary" onClick={agregar}>+</Button>
            </InputGroup>           
            {stock === "0" ? <Button variant="danger" id={ident}>Sin Stock</Button> : <Button variant="outline-primary" id={ident}>Agregar al Carrito</Button>}
            </div>
          </div>          
      </div>         

)
}

export default Contador