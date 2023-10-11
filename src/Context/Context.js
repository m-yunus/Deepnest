import React, { createContext, useEffect, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState(
        JSON.parse(localStorage.getItem('categories')) || []
      );
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

  const addProduct = (product) => {
    setProducts([...products, product]);
   
    
  };
  const addCategory = (category) => {
    setCategories([...categories, category]);
   
  };
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('products', JSON.stringify(products));
  }, [categories,products]);
  console.log(products);
console.log(categories);
  const deleteCategory = (categoryId) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(updatedCategories);
  };

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, deleteCategory,products,addProduct }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
