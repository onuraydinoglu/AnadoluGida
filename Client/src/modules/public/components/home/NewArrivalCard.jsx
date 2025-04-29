import HoverCard from "../../../../shared/components/HoverCard";

const NewArrivalCard = ({ image, title }) => {
  return (
    <HoverCard className="!h-70">
      <img src={image} alt={title} className="w-full h-40 object-contain mx-auto p-2" />
      <span className="mt-2 font-medium text-gray-800">{title}</span>
    </HoverCard>
  );
};

export default NewArrivalCard;
