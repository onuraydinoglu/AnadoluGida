import Header from "../../../../shared/components/Header";
import products from "../../../../shared/data/products";
import NewArrivalCard from "./NewArrivalCard";

const NewArrivalsSection = () => {
  // Yalnızca isNew === true olan ürünleri al
  const newProducts = products.filter((product) => product.isNew);

  return (
    <>
      <Header>Neu im Sortiment</Header>

      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-2">
        {newProducts.map((product) => (
          <NewArrivalCard key={product.id} image={product.image} title={product.title} />
        ))}
      </div>
    </>
  );
};

export default NewArrivalsSection;
