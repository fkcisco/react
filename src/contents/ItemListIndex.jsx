import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemList from '../components/itemList/ItemList'
import SliderHome from  '../components/slider/Slider'
import { Button } from 'react-bootstrap'

const ItemListIndex = () => {      
    return (    
        <>            
            <Container fluid> 
                <SliderHome/> 
            </Container> 
            <Container>
                <>             
                    <ItemList 
                        indexCards={true} 
                        productType="zapatillas" 
                    />
                    <div className="m-4 text-center">
                        <NavLink to="/producto/zapatillas">
                            <Button variant="danger">
                                 Ver Todas Las Zapatillas
                            </Button> 
                        </NavLink>
                    </div>
                    <ItemList
                        indexCards={true}
                        productType="medias"
                    />
                    <div className="m-4 text-center">
                        <NavLink to="/producto/medias">
                            <Button variant="danger">
                                Ver Todas Las Medias
                            </Button> 
                        </NavLink>
                    </div>
                </>
            </Container>             
        </>
    )
}
export default ItemListIndex
