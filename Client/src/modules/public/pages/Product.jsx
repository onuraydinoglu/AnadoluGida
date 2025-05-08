import Breadcrumbs from "../components/produkt/Breadcrumbs";
import ProductFiltersPanel from "../components/produkt/ProductFiltersPanel";
import ProductSection from "../components/produkt/ProductSection";

const Product = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="flex gap-6">
        <div className="">
          <ProductFiltersPanel />
        </div>
        <div className="">
          <ProductSection />
        </div>
      </div>
    </>
  );
};

export default Product;
