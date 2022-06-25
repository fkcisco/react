import { useState } from "react"
import { createContext, useContext } from "react"
import Swal from "sweetalert2"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const[cart, setCart] = useState([])

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const addToCard = ( item ) =>{ 

        if(IsInCart(item.id)) {
            Toast.fire({
                icon: 'error',
                title: 'El Producto ya Existe.'
            })
        } else {            
            setCart([
                    ...cart,
                    item
                ])
            Toast.fire({
                    icon: 'success',
                    title: 'Producto Agregado Correctamente'
                })
        }
       
    }

    const IsInCart = ( id ) =>{
        return cart && cart.some((i)=> i.id === id)
    }

    const DelProducto = ( id ) => {       
        const items = cart.filter((producto)=> producto.id !== id)            
            if(cart.length === 1) {
                    vaciarCarrito()
            } else {
            setCart(
                [...items]
                )
            Toast.fire({
                    icon: 'success',
                    title: 'Producto Eliminado Correctamente'
                })
                
            }
    }

    const TotalCarrito = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad, 0 )   }

    const PrecioTotal = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad * parseInt(i.precio), 0 )
    }

    const vaciarCarrito = () => {
        Toast.fire({
            icon: 'success',
            title: 'El Carrito se Vacio Correctamente'
        })
        return setCart([])
        
    }

    function NumberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

    

return (
    <CartContext.Provider
        value={{
            cart,
            addToCard,
            vaciarCarrito,
            DelProducto,
            PrecioTotal,
            TotalCarrito,
            NumberWithCommas
        }}> 

       {children}
    </CartContext.Provider>
)

} 