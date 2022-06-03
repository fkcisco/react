import {Container } from 'react-bootstrap'
import Saludo from './Saludo'
import ItemCount from './ItemCount'
import ClaseCuatro from './ClaseCuatro'

const Contenido= () => {

    return (    
    
        <Container> 
            <Saludo nombre='Francisco' apellido='Robledo' />
                        
            <ItemCount stock='10' init='1' producto='Zapatillas Nike' ident='1' />
            <ItemCount stock='5' init='1' producto='Zapatillas Adidas' ident='2' />
            <ItemCount stock='0' init='1' producto='Zapatillas Puma' ident='2' />

            <ClaseCuatro />   

        </Container>


)
}

export default Contenido
