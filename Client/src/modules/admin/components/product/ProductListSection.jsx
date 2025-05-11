import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import Button from "../../../../shared/components/Button";
import ProductListCard from "./ProductListCard";

import departments from "../../../../shared/data/departments";
import categories from "../../../../shared/data/categories";
import products from "../../../../shared/data/products";

const ProductListSection = () => {
  const navigate = useNavigate();

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

      <ProductListCard products={products} categories={categories} departments={departments} />
    </>
  );
};

export default ProductListSection;
