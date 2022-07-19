import React from "react";
import { useState } from "react"
import { useEffect } from "react"
import { createContext } from "react"
import { useContext } from "react"
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
    
      const addProductCard = ( item ) =>{
        if(!isNaN(item.talleSeleccionado)) {
            if(isInCart(item.id)) {
                Toast.fire({
                    icon: 'error',
                    title: item.modelo+ ' ya Existe. Se puede comprar un mismo talle en el mismo modelo por pedido'
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
                    title: item.marca + ' - ' + item.modelo + '  Agregado Correctamente'
                })                                        
                }
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Se debe seleccionar un talle Disponible'
            })
        }
    }
    
    const addProductWish = ( product ) => {
        setWhislist([
            ...whislist,
            product
        ])        
        Toast.fire({
            icon: 'success',
            title: product.marca + ' - ' + product.modelo + ' agregado a Lista de Deseos'
        })       
    }
    
    const isInCart = ( id ) =>{
        return cart?.some((i)=> i.id === id)
    }
    
    const DeleteProductCart = ( id ) => {       
        const items = cart.filter( ( product )=> product.id !== id)            
            if(cart.length === 1) {
                CleanCart()
            } else {
            setCart(
                [...items]
                )
            Toast.fire({
                    icon: 'success',
                    title: 'Producto Eliminado Correctamente del Carrito'
                })                
            }
    }
    
    const DeleteProductWhishList = ( id ) => {       
        const items = whislist.filter(( product )=> product.id !== id)          
            setWhislist(
                [...items]
                )
            Toast.fire({
                    icon: 'success',
                    title: 'Producto Eliminado Correctamente de la Lista de Deseos'
                })        
    }
    
    const TotalProductCart = () =>{
        return cart.reduce(( accum,i ) => accum + i.cantidad, 0 )
    }   
    
    const TotalPriceCart = () =>{
        return cart.reduce(( accum,i ) => accum + i.cantidad * parseFloat(i.precio), 0 )
    }    
    
    const TotalPriceDiscountCart = () =>{ 
        return cart.reduce(( accum,i ) => accum + i.cantidad * parseFloat(i.precioFinal), 0 )
    }
    
    const TotalProductWhislist = () =>{ 
        return whislist.length
    }
    
    const CleanCart = () => {
        Toast.fire({
            icon: 'success',
            title: 'El Carrito se Vacio Correctamente'
        })        
        return setCart([])        
    }
    
    const ToastMessage = ( message ) => { 
        return Toast.fire({
            icon: 'error',
            title: message
        })
    } 

    
    
    useEffect(() => {
        const whishListStorage = JSON.parse(localStorage.getItem('Deseos'))        
        if (whishListStorage != null && whishListStorage.length >= 1) {
            setWhislist(whishListStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Deseos', JSON.stringify(whislist))
      }, [whislist])

    useEffect(() => {
        const CartListStorage = JSON.parse(localStorage.getItem('Carrito'))       
            
            if (CartListStorage != null && CartListStorage.length >= 1) {
                setCart(CartListStorage)
                Swal.fire({
                    title: "Tenes Productos pendientes en el carrito",
                    showDenyButton: true,
                    denyButtonText: "Seguir Comprando",
                    denyButtonColor: "grey",
                    confirmButtonText: "Pagar",
                    confirmButtonColor: "#4c4",
                }).then((res) => {
                    if (res.isConfirmed) {                      
                        
                    }
                    if (res.isDenied) {
                    
                    }
                })
            }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('Carrito', JSON.stringify(cart))
    }, [cart])
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }      
    
    function applyPriceDiscount( price , discount ){ 
        return price - (parseFloat(price) * discount )
    } 
    
    return (
        <CartContext.Provider
            value={{
                cart,
                whislist,
                addProductCard,
                addProductWish,
                CleanCart,
                DeleteProductCart,
                DeleteProductWhishList,
                TotalPriceCart,
                TotalProductCart,
                TotalProductWhislist,
                TotalPriceDiscountCart,
                ToastMessage,
                numberWithCommas,
                applyPriceDiscount          
            }}> 
        {children}
        </CartContext.Provider>
    )
} 