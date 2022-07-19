import { Row } from 'react-bootstrap'
import Item  from '../itemCards/ItemCards'
import Loading from '../../helpers/Loading'
import { memo } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ListItem = memo ( ( { indexCards , productType = "Productos" } ) => {      
  const { objProductos } = useProductContext()   
  const [loading, setLoading] = useState(true)  
  const [productos, setProductos] = useState([])
  const [mostrarCuatro, setMostrarCuatro] = useState(indexCards)
  const [productoTipo, setProductoTipo] = useState(productType)
  //const [bool, setBool] = useState(true)   
  const { categoriaId } = useParams()
  const { filtro } = useParams()  
  const { valor } = useParams()    

  useEffect(()=>{     
    try {
      if(categoriaId) {
        setProductos(objProductos
          .filter(producto => producto.tipoProducto === categoriaId)
          .filter(producto => producto[filtro] === valor)
        )            
        setLoading(false)
        } else {
          if(indexCards) {
            const filtrarTipo = objProductos.filter(producto => producto.tipoProducto === productoTipo)
            const mostrarCuatro = filtrarTipo.slice(0,4)
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
  }, [categoriaId, filtro, valor, objProductos])

  return (
      <div>
        { 
          loading ?
            <Row className=' d-flexjustify-content-md-center'><Loading titulo="Catalogo de Productos"/></Row>        
        :
          <div>    
            <h1 className='py-5 text-center'>Catalogo de {`${productoTipo}`} </h1>  
              <Row>            
                {productos.map(productSingle =>
                  <Item key={productSingle.id} 
                  product={productSingle} 
                  productQuantity={productos.length}/>
                )}
              </Row>
          </div>
        }
      </div>
  )}
)
export default ListItem