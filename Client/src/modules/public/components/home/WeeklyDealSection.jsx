import Header from "../../../../shared/components/Header";
import Overlaycard from "../../../../shared/components/OverlayCard";
import GradientOverlay from "../../../../shared/components/GradientOverlay";
import Countdown from "../../../../shared/components/Countdown";
import WeeklyDealCard from "./WeeklyDealCard";

import products from "../../../../shared/data/products";
import categories from "../../../../shared/data/categories";

import reyon from "../../../../shared/assets/images/reyon.png";

const getCategoryTitle = (id) => {
  const category = categories.find((cat) => cat.id === id);
  return category ? category.title : "Bilinmeyen";
};

const WeeklyDealSection = () => {
  // Yalnızca isDiscounted === true olan ürünleri al
  const newProducts = products.filter((product) => product.isDiscounted);

  return (
    <>
      <Header>Rabatt der Woche</Header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        <div className="p-2">
          <Overlaycard image={reyon} className="h-52">
            <GradientOverlay fromClass="from-black/20" toClass="to-black/0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/0 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Countdown />
            </div>
          </Overlaycard>
        </div>

        {newProducts.map((product) => (
          <WeeklyDealCard
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
export default WeeklyDealSection;
