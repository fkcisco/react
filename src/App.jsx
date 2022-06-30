import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import ItemListContainer from './contents/ItemListContainer'
import ItemDetailContainer from './contents/ItemDetailContainer'
import ItemPaginaCarrito from './contents/ItemPaginaCarrito'
import {BrowserRouter as Rutas } from 'react-router-dom'
import {Routes } from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Navigate } from 'react-router-dom'
import ItemPaginaContacto from './contents/ItemPaginaContacto'
import Layout from "./Index.jsx";
import { createContext } from 'react'
import { CartContextProvider } from './contexts/cartContext'
//import { ProductContextProvider } from './contexts/ProductContext'


const AppContext = createContext([])

function App() {  
  return (
    //<ProductContextProvider>
      <CartContextProvider>
        <Rutas>      
          <Layout>
          <div className="App"> 
              <Routes>
                  <Route index path='/' element={<ItemListContainer />} />
                  <Route path='/producto/:categoriaId/search/:filtro/:valor' element={<ItemListContainer/>} />
                  <Route path='/producto/:categoriaId' element={<ItemListContainer/>} />
                  {/* <Route path='/marca/:categoriaId' element={<ItemListContainer/>} />  */}
                  <Route path='/detalle/:id' element={<ItemDetailContainer/>} /> 
                  <Route path='/contacto' element={<ItemPaginaContacto />} />
                  <Route path='/carrito' element={<ItemPaginaCarrito/>} />
                  <Route path='*' element={<Navigate to=''/>} />              
              </Routes>          
          </div>
          </Layout>
        </Rutas> 
      </CartContextProvider>  
    //</ProductContextProvider>
  );
}

export default App
