import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './itemCount.css'

const Contador= ({stock, init, ident, onAdd, talles, precioFinal}) => {
    
    const [ count, setCount ] = useState(parseFloat(init))
    const [ talle, setTalle ] = useState()  
    
    const [botonAgregar, setBotonAgregar ] = useState(true)
      
    const agregar = () => count < stock  &&  setCount(count + 1)
    const descontar = () => count >= 1  &&  setCount(count - 1) 
      

   
    const CarritoAgregar = () => {
      new Promise((resultado) => {
        return onAdd(count, talle, precioFinal)
    })
    .then(resultado =>
      setBotonAgregar(false)
    ) 
    .catch(() => {
       console.log('error');
    })      
    }

      // const AgregarCarrito = () => {    
      //   onAdd(count, talle, precioFinal)
      //   //setBotonAgregar(false)
      // }   
      

    const capturarTalle = ( e ) => {
      setTalle(e.target.value);
    }
    
    
    return ( 
            <>     
              <div className="d-flex">
                { botonAgregar === true ? (  
                    <>
                        { stock >= 1 && (
                            <>
                                  <Form.Select className='talle' aria-label="Default select example" onChange={capturarTalle}>
                                    <option value="0">Talles Disponibles</option>
                                    {talles.map(talle=> <option key={talle}>{talle}</option> )}
                                    </Form.Select>
                                    <InputGroup className="mb-3 outline-secondary justify-content-between form-control p-0">
                                      <Button variant="primary" onClick={descontar}>-</Button>
                                      <p className='cantidad'>{stock <= 0 ? 0 : count }</p>
                                      <Button variant="primary" onClick={agregar}>+</Button>
                                    </InputGroup>
                              </> 
                                            ) 
                        }

                        {
                                        stock <= 0 ? (
                                          <>
                                            <Button variant="danger" id={ident}>Sin Stock</Button><NavLink to="/">
                                            <Button variant="outline-primary">Seguir Comprando</Button></NavLink>
                                          </> 
                                          ):(
                                                              
                                          <Button variant="outline-primary" onClick={CarritoAgregar}>Agregar</Button>
                                        ) 
                        }
                    </>
                    ) 
                   : 
                   (                    
                      <>
                        <NavLink to="/carrito"><Button variant="primary">Ir al Carrito</Button></NavLink>
                        <NavLink to="/"><Button variant="secondary">Seguir Comprando</Button></NavLink>     
                      </> 
                    ) 
                  }
             
                  
                  
                                  
                  
              </div>
          </>        
)

}

export default Contador