import { useEffect, useState } from "react";
import Header from "../../../../shared/components/Header";
import { getProducts } from "../../../../shared/services/productService";
import { getCategories } from "../../../../shared/services/categoryService";
import ProdcutTable from "./ProdcutTable";

const ProductListSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productData, categoryData] = await Promise.all([getProducts(), getCategories()]);
        setProducts(productData);
        setCategories(categoryData);
      } catch (err) {
        console.error("Veriler alınamadı", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header>Product List</Header>
      <ProdcutTable products={products} categories={categories} />
    </>
  );
};

export default ProductListSection;
