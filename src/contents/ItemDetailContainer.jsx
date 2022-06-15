import {Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ItemDetail from '../components/itemListDetail/ItemDetail'
import {getFetch} from '../components/helpers/getFetch'

import {useParams} from 'react-router-dom' 


const ItemDetailContainer= () => {
    
    const [loading, setLoading] = useState(true) 
    const [objProductos, setObjProductos] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        getFetch()
        .then((resp)=>{    
            setObjProductos(resp.filter(producto => producto.id === id )) 
        })
        .catch(err => console.log(err))  
        .finally(()=> setLoading(false))
    
    }, [id])     

    

    return (        
        <Container>                      
             {objProductos.map(producto =>
             <ItemDetail key={producto.id } producto={producto} loading={loading}/>  
             )}                         
        </Container>

)
}

export default ItemDetailContainer
