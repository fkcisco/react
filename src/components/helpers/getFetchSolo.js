import ProductoSolo from '../../media/ProductoSolo'

export const getFetchSolo = () => {  
    return new Promise ((resolve)=>{ 
            setTimeout(()=> {   
                resolve(ProductoSolo)  
            },3000)          
          }) 
      
  } 