import { useCartContext } from '../../contexts/CartContext'
import { BookmarkHeart } from 'react-bootstrap-icons';
import { BookmarkHeartFill } from 'react-bootstrap-icons';
import { useState } from 'react'

const WishList =  ({ product }) => { 

    const { addProductWish,
            whislist, 
            ToastMessage,
            DeleteProductWhishList} = useCartContext()           
  
    const [style, setStyle] = useState({display: 'none', animation:'all 1s'});  

    function whislistAdd() {
        if(!isInWhislist(product.id)) {
            new Promise((result) => {
            return addProductWish( { ...product } )            
            })
            .catch(() => {
                console.log('error');
            })      
        } else {
            ToastMessage(product.modelo + " ya esta en lista de deseos")
        }
    }

    const isInWhislist = ( id ) =>{
        return whislist?.some((i)=> i.id === id)
    }  

    return (
        <>    
            {
                !isInWhislist(product.id) ? 
                    <BookmarkHeart 
                        className='megusta' 
                        onClick={whislistAdd}
                    /> 
                    :
                    <BookmarkHeartFill 
                        onClick={() => DeleteProductWhishList(product.id)} 
                        className='megusta'
                    /> 
            }
                        
        </>
    )
}
export default WishList 