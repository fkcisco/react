import {Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ItemDetail from '../components/itemListDetail/ItemDetail'
import {getFetchSolo} from '../components/helpers/getFetchSolo'


const ItemDetailContainer= () => { 

    const [loading, setLoading] = useState(true) 
    const [productoSolo, setObjProductoSolo] = useState({})

    useEffect(()=>{
        getFetchSolo()
        .then((resp)=>{    
            setObjProductoSolo(resp)  
        })
        .catch(err => console.log(err))  
        .finally(()=> setLoading(false))
    
    }, [])     

    

    return (        
        <Container fluid>                      
            <ItemDetail producto={productoSolo} loading={loading}/>                           
        </Container>

)
}

export default ItemDetailContainer
