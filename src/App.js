import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoryProvider } from "./Context/Context";
import AddProduct from "./Pages/Category/AddProduct/AddProduct";
import Category from "./Pages/Category/Category";
import ProductListing from "./Pages/Category/ProductListing/ProductListing";
import ProductCategory from "./Pages/Category/ProductCategory/ProductCategory";
import ProductInnercategory from "./Pages/Category/ProductInnerCategory/ProductInnercategory";

function App() {
  return (
    <>
      <CategoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:innercategory" element={<ProductInnercategory />} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </>
  );
}

export default App;
