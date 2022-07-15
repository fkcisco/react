const Imput= ( ) => {  
    
    const handlerImput = (event) => {
        let vocales = ['a', 'e','i','o','u']
        
        if (vocales.includes(event.key)){
            event.stopPropagation()
        }
    }

    
    return (    
            <>
             <input type="text" onKeyDown={ handlerImput }></input>
            </>
        
)
}

export default Imput