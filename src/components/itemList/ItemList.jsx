import { Row } from 'react-bootstrap'
import Item  from '../itemCards/ItemCards'
import Loading from '../../helpers/Loading'
import { memo } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ListItem = memo ( ( { indexCards , productType = "Productos" } ) => {      
  const { objProduct } = useProductContext()   
  const [ loading, setLoading ] = useState(true)  
  const [ product, setProduct ] = useState([])
  const [ typeProduct, setTypeProduct ] = useState(productType) 
  const { categoryId } = useParams()
  const { filter } = useParams()  
  const { value } = useParams()    

  useEffect(()=>{     
    try {
      if(categoryId) {
        setProduct(objProduct
          .filter(producto => producto.tipoProducto === categoryId)
          .filter(producto => producto[filter] === value)
        )            
        setLoading(false)
        } else {
          if(indexCards) {
            const filterType = objProduct.filter(producto => producto.tipoProducto === typeProduct)
            const filterFour = filterType.slice(0,4)
            setProduct(filterFour)              
            setLoading(false)
          } else {
            setProduct(objProduct
              .filter(producto => producto.tipoProducto === typeProduct)
              )
            setLoading(false)
          }
        }
    } 
    catch (e) {
      console.log("Error: ", e);
    }              
  }, [categoryId, filter, value, objProduct])

  return (
      <div>
        { 
          loading ?
            <Row className=' d-flexjustify-content-md-center'><Loading titulo="Catalogo de Productos"/></Row>        
        :
          <div>    
            <h1 className='py-5 text-center'>Catalogo de {`${typeProduct}`} </h1>  
              <Row>            
                {product.map(productSingle =>
                  <Item key={productSingle.id} 
                  product={productSingle} 
                  productQuantity={product.length}/>
                )}
              </Row>
          </div>
        }
      </div>
  )}
)
export default ListItem