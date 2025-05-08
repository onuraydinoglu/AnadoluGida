import ProductsCard from "./ProductsCard";
import ProductHeader from "./ProductHeader";

import products from "../../../../shared/data/products";
import categories from "../../../../shared/data/categories";

const getCategoryTitle = (id) => {
  const category = categories.find((cat) => cat.id === id);
  return category ? category.title : "Bilinmeyen";
};

const ProductSection = () => {
  return (
    <>
      <div className="mb-5">
        <ProductHeader />
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={getCategoryTitle(product.categoryId)}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
