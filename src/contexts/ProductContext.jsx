import { useState } from "react"
import { createContext, useContext } from "react"
import {useParams} from 'react-router-dom' 
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import { useEffect } from "react"


const ProductContext = createContext([])

export const useProductContext = () => useContext(ProductContext)

export const ProductContextProvider = ({ children }) => {
    

        const [bool, setBool] = useState(true)
        const [loading, setLoading] = useState(true)
        const [objProductos, setObjProductos] = useState([]) 
        
        const { categoriaId } = useParams()
        const { filtro } = useParams()  
        const { valor } = useParams()

       

    function ProductsList(){          

        useEffect(()=>{
            if(categoriaId && filtro && valor) {   
            
                const db = getFirestore()
                const queryCollection = collection(db,'productos')
                const queryCollectionFilter = query(queryCollection, where('tipoProducto','==', categoriaId), where(filtro,'==', valor))
                getDocs(queryCollectionFilter)               
                .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
                .catch(err => console.log(err))
                .finally(()=>setLoading(false))                
            
            } else {       
                            const db = getFirestore()
                            const queryCollection = collection(db,'productos')
                            getDocs(queryCollection)
                            .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
                            .catch(err => console.log(err))
                            .finally(()=>setLoading(false))               
            } 
            
           
            
        }, [{bool}]) 
    
   }

  
   

    return (
        <ProductContext.Provider
            value={{
                ProductsList               
            }}> 
    
           {children}
        </ProductContext.Provider>
    )
    
    } 