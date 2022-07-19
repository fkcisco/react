import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import './itemCount.css'

const ItemCount= ( { stock , init , ident , onAdd , sizeList , PriceFinal } ) => {

  const { ToastMessage } = useCartContext() 

  const [keepBuyingButton, SetKeepBuyingButton] = useState(true)
    
    const [ count, setCount ] = useState(parseFloat(init))
    const [ size, setSize ] = useState() 
    const add = () => count < stock ?  setCount(count + 1) : ToastMessage(count + " es la cantidad máxima en Stock")
    const rest = () => count >= 1  ?  setCount(count - 1) : ToastMessage("La cantidad mínima debe ser 1")
    

    const CartAddTo = () => {      
       new Promise((result) => {          
          return onAdd(count, size, PriceFinal)          
        })
        .then((result) => {
          SetKeepBuyingButton(false)
        })       
        .catch(() => {
          console.log('error')
        })              
    }

    
    const AddBuying = ({handleInter}) =>{
      return <Button variant="outline-primary" onClick={handleInter}>Agregar</Button>
    }
    const KeepBuying = () =>{
      return (
        <>
          <NavLink to="/carrito"><Button variant="primary">Ir al Carrito</Button></NavLink>
          <NavLink to="/"><Button variant="secondary">Seguir Comprando</Button></NavLink>     
        </>
      )
    } 
    

    const handleInter = () => { 
      CartAddTo()
        .then(()=>{
          SetKeepBuyingButton(false)
        })            
    }   
      const catchSize = ( e ) => {
        setSize(e.target.value);
      }

      

    return ( 
      <>     
        <div className="d-flex">
          { 
            stock >= 1 && (
              <>
                {
                  keepBuyingButton &&                   
                      <>
                        <Form.Select className='talle' aria-label="Default select example" onChange={catchSize}>
                          <option value="0">Talles Disponibles</option>
                          {
                            sizeList.map(
                              sizeMap=> <option key={sizeMap}>{sizeMap}</option> 
                            )}
                        </Form.Select>
                        <InputGroup className="mb-3 outline-secondary justify-content-between form-control p-0">
                          <Button variant="primary" onClick={rest}>-</Button>
                          <p className='cantidad'>{stock <= 0 ? 0 : count }</p>
                          <Button variant="primary" onClick={add}>+</Button>
                        </InputGroup>
                      </>                     
                }
              </> 
            ) 
          }
          {
            stock <= 0 ? (
              <>                
                <NavLink to="/">
                  <Button variant="outline-primary">
                    Seguir Comprando
                  </Button>
                </NavLink>
              </> 
            ):(                                                             
              <> 
                {
                  keepBuyingButton ? <AddBuying handleInter={handleInter} id={ident}/> : <KeepBuying id={ident}/>
                  }
              </>
            ) 
          }
        </div>
      </>
    )
}
export default ItemCount
