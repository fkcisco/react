import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBar from './../components/header/NavBar'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Footer from '../components/footer/Footer'

function App() {
  
 
  return (    
    <div className="App">  
      <NavBar />      
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer />
          
    </div>
  );
}

export default App
