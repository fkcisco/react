import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import ItemListContainer from './contents/ItemListContainer'
import ItemDetailContainer from './contents/ItemDetailContainer'
import ItemPaginaCarrito from './contents/ItemDetailContainer'
import {BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom'
import ItemPaginaContacto from './contents/ItemPaginaContacto'
import Layout from "./Layout/Index";

function App() {
  
 
  return (  
    <Rutas>
      <Layout>
      <div className="App"> 
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/producto/:categoriaId/search/:filtro/:valor' element={<ItemListContainer/>} />
            <Route path='/producto/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/marca/:categoriaId' element={<ItemListContainer/>} /> 
            <Route path='/detalle/:id' element={<ItemDetailContainer/>} /> 
            <Route path='/contacto' element={<ItemPaginaContacto />} />
            <Route path='/carrito' element={<ItemPaginaCarrito/>} />
            <Route path='*' element={<Navigate to=''/>} />           
            
            {/* <Route path='/contacto' element=''/>  */}
          </Routes>          
      </div>
      </Layout>
    </Rutas>  
  );
}

export default App
