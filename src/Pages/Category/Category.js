import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../Context/Context';
import './Category.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Category = () => {
  const { categories, addCategory } = useContext(CategoryContext);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();

    const isCategoryExist = categories.some(
      (existingCategory) => existingCategory.name === category
    );

    if (isCategoryExist) {
      setError('Category already exists!');
    } else {
      addCategory({ id: Date.now(), name: category });
      setCategory('');
      setError('');
    }
  };

  return (
    <div className="category-form-container">
      <form className="category-form" onSubmit={handleAddCategory}>
        <input
          className="category-input"
          type="text"
          placeholder="Enter category name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="category-button" type="submit">
          Add Category
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
<div style={{display:"flex",justifyContent:"center",gap:"2rem",marginTop:"2rem"}}>
<Link className='category-button' to="/addproduct"> Add New Product </Link>
      <Link className='category-button' to="/products"> Product List </Link>
</div>
      
    </div>
  );
};

export default Category;
