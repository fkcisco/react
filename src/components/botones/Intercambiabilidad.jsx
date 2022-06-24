import { useState } from "react"
import { Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const ImputCount = () =>{
    return (
        <>
        <NavLink to="/carrito"><Button variant="primary">Ir al Carrito</Button></NavLink>
        <NavLink to="/"><Button variant="secondary">Seguir Comprando</Button></NavLink>     
        </>
    )
}

const ButtonCount = ({handleInter}) =>{
    return <Button variant="outline-primary" onClick={handleInter}>Agregar</Button>
}

const Intercambiabilidad = ({ ident }) => {
    const [inputType, setInputType ] = useState("button")
    
    const handleInter = () => {
            setInputType("input")
    }

    
    
return (
            <> 
                {
                    inputType === "button" ? <ButtonCount handleInter={handleInter} id={ ident }/> : <ImputCount id={ ident }/>
                }
            </>

)

}

export default Intercambiabilidad