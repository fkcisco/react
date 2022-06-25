import { useState } from "react"
import { createContext, useContext } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const[cart, setCart] = useState([])

    const addToCard = ( item ) =>{ 

        if(IsInCart(item.id)) {
            alert("el producto ya existe")
        } else {            
            setCart([
                    ...cart,
                    item
                ])
        }
       
    }

    const DelProducto = ( id ) => {
        console.log("llega el id de borrar"+id)
        
        const items = cart.filter((producto)=> producto.id !== id)

        console.log(items)
            
            if(cart.length === 1) {
                console.log("vacia"+id)
                    vaciarCarrito()
            } else {
                console.log("no vacia"+id)
            setCart(
                [...items]
                )
            }
    }

    const TotalCarrito = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad, 0 )
    }

    const IsInCart = ( id ) =>{
        return cart && cart.some((i)=> i.id === id)
    }

    const PrecioTotal = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad * parseInt(i.precio), 0 )
    }

    const vaciarCarrito = () => {
        return setCart([])
    }

    

return (
    <CartContext.Provider
        value={{
            cart,
            addToCard,
            vaciarCarrito,
            DelProducto,
            PrecioTotal,
            TotalCarrito
        }}> 

       {children}
    </CartContext.Provider>
)

} 