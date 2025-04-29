import HoverCard from "../../../../shared/components/HoverCard";

const CategorySliderCard = ({ image, title }) => {
  return (
    <HoverCard>
      <img src={image} alt={title} className="w-12 h-12 mb-2" />
      <span className="text-sm">{title}</span>
    </HoverCard>
  );
};

export default CategorySliderCard;
