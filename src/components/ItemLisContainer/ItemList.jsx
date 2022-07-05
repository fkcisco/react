import {Row } from 'react-bootstrap'
import Item  from '../itemCards/Item'
import Cargando from '../../helpers/Cargando'
import { memo, useState } from 'react'
//import { useEffect } from "react"
//import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
//import {useParams} from 'react-router-dom' 
import { useProductContext } from '../../contexts/ProductContext'

const ListItem = memo (
    () => {
      
   const { ProductsList } = useProductContext() 
  
  const [loading, setLoading] = useState(true)  

  const [productoProductContext] = useState(ProductsList())  


  //     const [objProductos, setObjProductos] = useState([]) 

  //     const [bool, setBool] = useState(true)    
          
  //     const { categoriaId } = useParams()
  //     const { filtro } = useParams()  
  //     const { valor } = useParams()


  //   useEffect(()=>{
  //     if(categoriaId && filtro && valor) {   
      
  //         const db = getFirestore()
  //         const queryCollection = collection(db,'productos')
  //         const queryCollectionFilter = query(queryCollection, where('tipoProducto','==', categoriaId), where(filtro,'==', valor))
  //         getDocs(queryCollectionFilter)               
  //         .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
  //         .catch(err => console.log(err))
  //         .finally(()=>setLoading(false))                
      
  //     } else {       
  //                     const db = getFirestore()
  //                     const queryCollection = collection(db,'productos')
  //                     getDocs(queryCollection)
  //                     .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
  //                     .catch(err => console.log(err))
  //                     .finally(()=>setLoading(false))               
  //     } 
      
    
      
  // }, [{bool}]) 

  return ( 
    
    <div>
      { loading 
      ?<Row className=' d-flexjustify-content-md-center'><Cargando titulo="Catalogo de Productos"/></Row>        
      :<div>    
      <h1 className='py-5 text-center'>Catalogo de Zapatillas</h1>  
        <Row>
            
            {productoProductContext.map(producto =>
                <Item key={producto.id} 
                producto={producto} />
                )}

          </Row>
        </div>

        }
    </div>
   )  
  }

  )

  export default ListItem