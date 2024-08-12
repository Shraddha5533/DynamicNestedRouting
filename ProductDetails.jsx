import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const { productId } = useParams();

  let productInfo;

  if (productId === 'p1') {
    productInfo = 'This is about mobile details';
  } else if (productId === 'p2') {
    productInfo = 'This is about laptop details';
  } else if (productId === 'p3') {
    productInfo = 'This is about tablet details';
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <p>{productInfo}</p>
    </div>
  );
};

export default ProductDetails;
