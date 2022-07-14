import {Container } from 'react-bootstrap'
import ItemList from '../components/itemList/ItemList'


const ItemListContainer= () => {  


    return (    
        <>
            
            <Container>                
                <ItemList mostrarIndex={false}/>                              
            </Container>
        </>
)
}

export default ItemListContainer
