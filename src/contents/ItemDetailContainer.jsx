import { Container } from 'react-bootstrap'
import { useEffect} from 'react'
import { useState } from 'react'
import ItemDetail from '../components/itemListDetail/ItemListDetail'
import { doc } from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom' 
import ItemList from '../components/itemList/ItemList'


const ItemDetailContainer= () => {

  const [loading, setLoading] = useState(true) 
  const [objProduct, setObjProduct] = useState([])
  const { id } = useParams()
   
  useEffect(() => {
    const db = getFirestore()
    const queryItem = doc(db,'productos', id)
    getDoc(queryItem)
    .then(resp =>setObjProduct({ id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [id])
  
  return (        
        <Container>
             <ItemDetail key={id} product={objProduct} loading={loading}/>
             { objProduct.tipoProducto === "zapatillas" && <ItemList indexCards={true} productType="zapatillas"/> } 
             { objProduct.tipoProducto === "medias" && <ItemList indexCards={true} productType="medias"/> }              
        </Container>
        )
}

export default ItemDetailContainer
