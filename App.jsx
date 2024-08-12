import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Dynamic Routing</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
