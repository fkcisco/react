import { useState } from "react"
import { createContext, useContext } from "react"
import { getDocs, getFirestore, collection} from 'firebase/firestore'
import { useEffect } from "react"

const ProductContext = createContext([])
export const useProductContext = () => useContext(ProductContext)
export const ProductContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [objProductos, setObjProductos] = useState([]) 
    const productsList = () => {          
        const db = getFirestore()
        const queryCollection = collection(db,'productos')
        getDocs(queryCollection)
        .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))                              
        return [objProductos]       
    }   
    useEffect(() => {
        productsList()
    }, [])

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