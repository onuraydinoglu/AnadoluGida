import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts.jsx";
import Home from "./pages/Home.jsx";
import Department from "./pages/Department.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import Category from "./pages/Category.jsx";
import AddCategory from "./components/category/AddCategory.jsx";
import Product from "./pages/Product.jsx";
import AddProduct from "./components/product/AddProduct.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="department" element={<Department />} />
          <Route path="department/add" element={<AddDepartment />} />
          <Route path="category" element={<Category />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
