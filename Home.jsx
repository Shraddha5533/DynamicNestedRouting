import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Product Store</h2>
      <p>Here We give a list of products. Please Explore that.</p>
      <Link to="/products" className="explore-link">Explore Products</Link>
    </div>
  );
};

export default Home;
