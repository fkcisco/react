import Productos from '../../media/Productos'

export const getFetch = () => {  
    return new Promise ((resolve)=>{ 
            setTimeout(()=> {   
                resolve(Productos)  
            },0)          
          }) 
      
  } 