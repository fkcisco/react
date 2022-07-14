import {Row } from 'react-bootstrap'
import Item  from '../itemCards/ItemCards'
import Cargando from '../../helpers/Cargando'
import { memo} from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



const ListItem = memo (
    ({mostrarIndex, tipoProducto}) => {
      
  const { objProductos  } = useProductContext()   
  const [loading, setLoading] = useState(true)  
  const [productos, setProductos] = useState([])
  const [mostrarCuatro, setMostrarCuatro] = useState(mostrarIndex)
  const [productoTipo, setProductoTipo] = useState(tipoProducto)
  const [bool, setBool] = useState(true)   

  console.log(productoTipo)
  
  const { categoriaId } = useParams()
  const { filtro } = useParams()  
  const { valor } = useParams()


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

    useEffect(()=>{     
        try {
          if(categoriaId) {
            setProductos(objProductos
              .filter(producto => producto.tipoProducto === categoriaId)
              .filter(producto => producto[filtro] === valor)
            )
            setLoading(false)
          } else {
            if(mostrarIndex) {
              const filtrarTipo = objProductos.filter(producto => producto.tipoProducto === productoTipo)
              const mostrarCuatro = filtrarTipo .slice(0,4)
              setProductos(mostrarCuatro)
              setLoading(false)
            } else {
            setProductos(objProductos
              .filter(producto => producto.tipoProducto === productoTipo)
              )
            setLoading(false)
            }
          }
        } 
        
        catch (e) {
          console.log("Error: ", e);
        }

      }, [categoriaId, filtro, valor]) 

  return ( 
    
    <div>
      { loading 
      ?<Row className=' d-flexjustify-content-md-center'><Cargando titulo="Catalogo de Productos"/></Row>        
      :<div>    
      <h1 className='py-5 text-center'>Catalogo de {`${productoTipo}`} </h1>  
        <Row>            
            {productos.map(producto =>
                <Item key={producto.id} 
                producto={producto} 
                cantidadProductos={productos.length}/>
                )}

          </Row>
        </div>

        }
    </div>
   )  
  }

  )

  export default ListItem