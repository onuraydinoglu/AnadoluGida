import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts.jsx";
import Home from "./pages/Home.jsx";
import Department from "./pages/Department.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="department" element={<Department />} />
          <Route path="category" element={<Category />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
