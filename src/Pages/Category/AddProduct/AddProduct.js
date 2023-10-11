import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../../Context/Context';
import './Addproduct.css'; // Import the CSS file for styling

const AddProduct = () => {
  const { categories, addProduct } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [productName, setProductName] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!selectedCategory || !subCategory || !productName) {
      alert('Please fill out all fields.');
      return;
    }

    addProduct({
      category: selectedCategory,
      subCategory,
      productName,
    });

    setSubCategory('');
    setProductName('');
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleAddProduct}>
        <div className="form-group">
          <label>Select Category:</label>
          <select
            className="select-input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Sub Category:</label>
          <input
            className="text-input"
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            className="text-input"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
