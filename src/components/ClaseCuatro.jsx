import { useEffect, useState } from 'react'


function ClaseCuatro() {  

let objPersona = [{id:"1",name:'Francisco', apellido: 'Robledo' },{id:"2",name:'Marcelo', apellido: 'Gallador' },{id:"3",name:'Ariel', apellido: 'Ortega'},{id:"4",name:'Enzo', apellido: 'Francescoli'}]
  
  const getFetch = ()=> {     
    return new Promise ((resolve, reject)=> {
      setTimeout(()=> {
      resolve(objPersona)
    },3000)
    }) 
 } 

  const Tarea = () => {
    const [objPersona, setProductos] = useState([]) 
    
    useEffect(()=>{
      getFetch()
      .then((resp)=> {
        setProductos(resp)
      })
    .catch(err => console.log(err))
    .finally(()=> console.log("si finaly"))
  },[])

  console.log(objPersona)
  } 
  
  Tarea()   
 
    return (    
        <section>
        {objPersona.map(producto => 
            <div key={producto.id}>
              <h1> {producto.name} </h1>
              <p>{producto.apellido}</p>      
            </div>
            )}
        </section>

        )
}

export default ClaseCuatro