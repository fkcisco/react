import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (    
    <div className="App">
      <NavBar/>
      <ItemListContainer/>      
    </div>
  );
}

export default App
