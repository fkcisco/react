import ItemListContainer from './contents/ItemListContainer'
import ItemDetailContainer from './contents/ItemDetailContainer'
import ItemPaginaCart from './contents/ItemPageCart'
import { BrowserRouter as RoutesApp } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import ItemPageContact from './contents/ItemPageContact'
import Layout from "./Index.jsx";
import { createContext } from 'react'
import { CartContextProvider } from './contexts/CartContext'
import { ProductContextProvider } from './contexts/ProductContext'
import WishesPage from './components/pageWishList/PageWishList'
import ItemListIndex from './contents/ItemListIndex'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppContext = createContext([])

function App() {  
  
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <RoutesApp>      
          <Layout>
          <div className="App"> 
              <Routes>                
                  <Route index path='/' element={<ItemListIndex/> } />
                  <Route path='/producto/:categoryId/search/:filter/:value' element={<ItemListContainer/>} />
                  <Route path='/producto/:categoryId' element={<ItemListContainer/>} />
                  <Route path='/detalle/:id' element={<ItemDetailContainer/>} /> 
                  <Route path='/contacto' element={<ItemPageContact />} />
                  <Route path='/carrito' element={<ItemPaginaCart/>} />
                  <Route path='/deseos' element={<WishesPage/>} />
                  <Route path='*' element={<Navigate to=''/>} />              
              </Routes>          
          </div>
          </Layout>
        </RoutesApp> 
      </CartContextProvider>  
    </ProductContextProvider>
  );
}

export default App
