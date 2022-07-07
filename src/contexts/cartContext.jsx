import { useState } from "react"
import { createContext, useContext } from "react"
import Swal from "sweetalert2"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const[cart, setCart] = useState([])

    const[whislist, setWhislist] = useState([])

   

    

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

                if(isInCart(item.id)) {
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

    const AddWishlist = ( producto ) => {
        setWhislist([
            ...whislist,
            producto
        ])
        // setLocalStorage(whislist)
        Toast.fire({
            icon: 'success',
            title: 'Producto Agregado a Whislist'
        })
       

    }

    // const setLocalStorage =( guardar ) => {
    //     try {
    //         setWhislist(guardar)
    //             window.localStorage.setItem("Lista de deseos", JSON.stringify(guardar))
    //         }
    //     catch(error) {
    //         console.log(error)
    //     }

    // }

    const isInCart = ( id ) =>{
        return cart?.some((i)=> i.id === id)
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

    const DelWhishlist = ( id ) => {       
        const items = whislist.filter((producto)=> producto.id !== id)            
            // if(whislist.length === 1) {
            //         vaciarCarrito()
            // } else {
            setCart(
                [...items]
                )
            Toast.fire({
                    icon: 'success',
                    title: 'Borraste el producto de Lista de deseos'
                })
                
            // }
    }

    const TotalCarrito = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad, 0 )   }

    const PrecioTotal = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad * parseFloat(i.precio), 0 )
    }
    
    const PrecioTotalDescuento = () =>{
        return cart.reduce((acum,i) => acum + i.cantidad * parseFloat(i.precioFinal), 0 )
    }

    const TotalDeseos = () =>{
        return whislist.length   }

    const vaciarCarrito = () => {
        Toast.fire({
            icon: 'success',
            title: 'El Carrito se Vacio Correctamente'
        })
        return setCart([])
        
    }

    const MensajeValidar = ( mensaje ) => {
        return Toast.fire({
            icon: 'error',
            title: mensaje
        })
    }

    function NumberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

      
    function PrecioDescuento(precio,descuento){
        return precio - (parseFloat(precio) * descuento)
      }

          

return (
    <CartContext.Provider
        value={{
            cart,
            whislist,
            addToCard,
            vaciarCarrito,
            DelProducto,
            DelWhishlist,
            PrecioTotal,
            TotalCarrito,
            TotalDeseos,
            NumberWithCommas,
            PrecioDescuento,
            PrecioTotalDescuento,
            MensajeValidar,
            AddWishlist
        }}> 

       {children}
    </CartContext.Provider>
)

} 