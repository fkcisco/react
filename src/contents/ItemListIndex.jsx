
import {Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemList from '../components/itemList/ItemList'
import SliderHome from  '../components/slider/Slider'
import {Button } from 'react-bootstrap'


const ItemListIndex = () => {  

    //  const [preview, setPreview] = useState([])
    //  useEffect(()=> setPreview(productosDeContext.slice(0,4)), [])



    return (    
        <>            
            <Container fluid> 
                <SliderHome/> 
            </Container> 
            <Container>
                <>             
                    <ItemList mostrarIndex={true} tipoProducto="zapatillas" />
                    <div className="m-4 text-center">
                        <NavLink to="/producto/zapatillas">
                            <Button variant="danger"  >Ver Todas Las Zapatillas</Button> 
                        </NavLink>
                    </div>
                    <ItemList mostrarIndex={true} tipoProducto="medias" />
                    <div className="m-4 text-center">
                        <NavLink to="/producto/medias">
                            <Button variant="danger"  >Ver Todas Las Medias</Button> 
                        </NavLink>
                    </div>
                </>
            </Container> 
            
        </>
)
}

export default ItemListIndex
