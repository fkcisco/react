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
        console.log("llega "+id)
        const items = cart.filter((producto)=> producto.id !== id)
        setCart([
            items
        ])
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
            PrecioTotal
        }}> 

       {children}
    </CartContext.Provider>
)

} 