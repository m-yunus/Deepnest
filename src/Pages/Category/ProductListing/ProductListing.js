import React, { useContext } from 'react';
import { CategoryContext } from '../../../Context/Context';
import './ProductListing.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const ProductListing = () => {
  const { categories, products } = useContext(CategoryContext);
  const navigate=useNavigate()
const handleNavigate=(name)=>{
navigate(`/products/${name}`)
}
  return (
    <div className="product-listing-container">
      <h2 className="category-heading">Electronics ({products.length})</h2>
      <h3 className="subcategory-heading">Subcategories</h3>
      <div className="subcategory-list">
        {categories.map((category, i) => (
          <div key={i} className="subcategory-item">
            <p onClick={()=>handleNavigate(category.name)}>
              {category.name} ({products.filter(product => product.category === category.name).length})
            </p>
          </div>
        ))}
      </div>
      <h3 className="product-heading">Products</h3>
      <table className="product-table">
        <thead>
          <tr>
            {products.map((product, index) => (
              <th key={index}>{product.productName}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ProductListing;
