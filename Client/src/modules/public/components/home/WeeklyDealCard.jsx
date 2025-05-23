import HoverCard from "../../../../shared/components/HoverCard";
import ProductCard from "../../../../shared/components/ProductCard";

const WeeklyDealCard = ({ image, category, title, description }) => {
  return (
    <HoverCard className="items-start">
      <ProductCard image={image} category={category} title={title} description={description} />
    </HoverCard>
  );
};

export default WeeklyDealCard;
