import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layouts.jsx";
import Home from "./pages/Home.jsx";

import Department from "./pages/Department.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import UpdateDepartment from "./components/department/UpdateDepartmen.jsx";

import Category from "./pages/Category.jsx";
import AddCategory from "./components/category/AddCategory.jsx";
import UpdateCategory from "./components/category/UpdateCategory.jsx";

import Product from "./pages/Product.jsx";
import AddProduct from "./components/product/AddProduct.jsx";
import UpdateProduct from "./components/product/UpdateProcut.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="department" element={<Department />} />
          <Route path="department/add" element={<AddDepartment />} />
          <Route path="department/edit/:id" element={<UpdateDepartment />} />

          <Route path="category" element={<Category />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/edit/:id" element={<UpdateCategory />} />

          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/edit/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
