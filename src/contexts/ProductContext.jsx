import { useState } from "react"
import { createContext, useContext } from "react"
import { getDocs, getFirestore, collection} from 'firebase/firestore'
import { useEffect } from "react"
import { CardList } from "react-bootstrap-icons"


const ProductContext = createContext([])

export const useProductContext = () => useContext(ProductContext)

export const ProductContextProvider = ({ children }) => {

        

        // const [bool, setBool] = useState(true)
        const [loading, setLoading] = useState(true)
        const [objProductos, setObjProductos] = useState([]) 
        
        // const { categoriaId } = useParams()
        // const { filtro } = useParams()  
        // const { valor } = useParams()  
        
       
        const productsList = () => {           
           
                // if(categoriaId && filtro && valor) {  
                //     const db = getFirestore()
                //     const queryCollection = collection(db,'productos')
                //     const queryCollectionFilter = query(queryCollection, where('tipoProducto','==', categoriaId), where(filtro,'==', valor))
                //     getDocs(queryCollectionFilter)                                 
                //     .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
                //     .catch(err => console.log(err))
                //     .finally(()=>setLoading(false))                   
                // } else {       
                    const db = getFirestore()
                    const queryCollection = collection(db,'productos')
                    getDocs(queryCollection)
                    .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
                    .catch(err => console.log(err))
                    .finally(()=>setLoading(false))                              
                                
                // }                
             
            return objProductos        

        }     

        
        //   useEffect(() => {
        //       return productsList()
        //   }, [])

        //useEffect(()=> productsList(), []) 
        
         useEffect(()=> productsList, []) 


    return (
        <ProductContext.Provider
            value={{
                objProductos,
                loading,
                productsList      
            }}> 
    
           {children}
        </ProductContext.Provider>
    )
    
    } 