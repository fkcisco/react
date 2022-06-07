import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Contador= ({stock, init, ident}) => {

    const [ count, setCount ] = useState(parseFloat(init))
   
    const agregar = () => count < stock  &&  setCount(count + 1)
    const descontar = () => count >= 1  &&  setCount(count - 1)
    
   
    return (   
                 
          
             <>     
            <InputGroup className="mb-3 outline-secondary justify-content-between form-control p-0">
              <Button variant="primary" onClick={descontar}>-</Button>
              <p className='cantidad'>{stock === "0" ? "0" : count }</p>
              <Button variant="primary" onClick={agregar}>+</Button>
            </InputGroup>           
            {stock === "0" ? <Button variant="danger" id={ident}>Sin Stock</Button> : <Button variant="outline-primary" id={ident}>Agregar</Button>}
            </>         
              

)
}

export default Contador
