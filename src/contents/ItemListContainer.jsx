import { Container } from 'react-bootstrap'
import ItemList from '../components/itemList/ItemList'

const ItemListContainer= () => { 
    return (    
        <>            
            <Container>                
                <ItemList indexCards={false}/>                              
            </Container>
        </>
    )
}
export default ItemListContainer
