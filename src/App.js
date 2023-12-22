
import './App.css';
import ProductList from '../src/componentes/productList.js';
import { productos } from '../src/componentes/productos.js';

function App() {
  return (
    <div className="App">
    <ProductList productos = {productos}/>
    </div>
  );
}

export default App;
