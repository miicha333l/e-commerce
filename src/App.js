import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css'; // Import du fichier CSS global
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import Cart from './pages/Cart.js';

function App() {
    return (
      
      <div className="App">
        <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
      </div>
      
    );
  }
  
  export default App;
  