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

        
        if(!isNaN(item.talleSeleccionado)) {

                if(IsInCart(item.id)) {
                    Toast.fire({
                        icon: 'error',
                        title: 'El Producto ya Existe. Se puede comprar un mismo talle en el mismo modelo por pedido'
                    })
                } else if( item.cantidad < 1){
                    Toast.fire({
                        icon: 'error',
                        title: 'Se debe ingresar una cantidad válida'
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
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Se debe seleccionar un talle Disponible'
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
        return cart.reduce((acum,i) => acum + i.cantidad * parseFloat(i.precio), 0 )
    }

    const PrecioTotalDescuento = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad * parseFloat(i.precioFinal), 0 )
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

      
    function PrecioDescuento(precio,descuento){
        return precio - (parseFloat(precio) * descuento)
      }

      console.log(cart)
    

return (
    <CartContext.Provider
        value={{
            cart,
            addToCard,
            vaciarCarrito,
            DelProducto,
            PrecioTotal,
            TotalCarrito,
            NumberWithCommas,
            PrecioDescuento,
            PrecioTotalDescuento
        }}> 

       {children}
    </CartContext.Provider>
)

} 