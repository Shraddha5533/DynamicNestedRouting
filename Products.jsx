import { Link } from 'react-router-dom';


const Products = () => {
  return (
    <div className="products">
      <h2>List of Products</h2>
      <ul>
        <li><Link to="/products/p1">Mobile</Link></li>
        <li><Link to="/products/p2">Laptop</Link></li>
        <li><Link to="/products/p3">Tablet</Link></li>
      </ul>
    </div>
  );
};

export default Products;
