import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from './components/NavBar.jsx';

function App() {
  return (    
    <div className="App">
      <NavBar/>
      <header className="App-header">        
        <p>
          Hola soy una <code>App.js</code> desarrolla en React que de a poco me voy a convertir en un Ecommerce dinámico sin la necesidad de usar wordpress y sus mil millones de peticiones al servidor :D
        </p>        
      </header>
    </div>
  );
}

export default App;
