import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import Button from "../../../../shared/components/Button";
import ProductListCard from "./ProductListCard";
import { getProducts, deleteProduct } from "../../../../shared/services/productService";
import { getCategories } from "../../../../shared/services/categoryService";
import { getDepartments } from "../../../../shared/services/departmentService";

const ProductListSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const [productData, categoryData, departmentData] = await Promise.all([
        getProducts(),
        getCategories(),
        getDepartments(),
      ]);
      setProducts(productData);
      setCategories(categoryData);
      setDepartments(departmentData);
    };
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Subtitle>Product</Subtitle>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>Product</li>
            </ul>
          </div>
        </div>
        <Button className="btn btn-accent" onClick={() => navigate("/product/add")}>
          Add Product
        </Button>
      </div>

      <ProductListCard
        products={products}
        categories={categories}
        departments={departments}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ProductListSection;
