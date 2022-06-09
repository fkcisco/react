import {Container } from 'react-bootstrap'
import ItemList from '../components/ItemLisContainer/ItemList'
import SliderHome from '../components/slider/SliderHome'


const ItemListContainer= () => {  

    return (    
        <>
            <SliderHome /> 
            <Container>
                <ItemList />                              
            </Container>
        </>
)
}

export default ItemListContainer
