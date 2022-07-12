import {Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ItemDetail from '../components/itemListDetail/ItemListDetail'
//import {getFetch} from '../helpers/getFetch'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import {useParams} from 'react-router-dom' 


const ItemDetailContainer= () => {
    
    const [loading, setLoading] = useState(true) 
    const [objProductos, setObjProductos] = useState([])
    const { id } = useParams()
    //const [bool, setBool] = useState(true)  

    // useEffect(()=>{
    //     getFetch()
    //     .then((resp)=>{    
    //         setObjProductos(resp.filter(producto => producto.id === id )) 
    //     })
    //     .catch(err => console.log(err))  
    //     .finally(()=> setLoading(false))
    
    // }, [id]) 
    
    useEffect(() => {

      const db = getFirestore()
      const queryItem = doc(db,'productos', id)
      getDoc(queryItem) // promesa
      .then(resp =>setObjProductos({ id: resp.id, ...resp.data()}))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }, [id])

    

    return (        
        <Container>
             <ItemDetail key={id} producto={objProductos} loading={loading}/> 
         </Container>

)
}

export default ItemDetailContainer
