import { Container } from 'react-bootstrap'
import { useEffect} from 'react'
import { useState } from 'react'
import ItemDetail from '../components/itemListDetail/ItemListDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom' 
import ItemList from '../components/itemList/ItemList'


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

  console.log(objProductos.tipoProducto)

  return (        
        <Container>
             <ItemDetail key={id} product={objProductos} loading={loading}/>
             { objProductos.tipoProducto === "zapatillas" && <ItemList indexCards={true} productType="zapatillas"/> } 
             { objProductos.tipoProducto === "medias" && <ItemList indexCards={true} productType="medias"/> }               
               
              
         </Container>

)
}

export default ItemDetailContainer
