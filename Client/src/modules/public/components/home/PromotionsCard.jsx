import Button from "../../../../shared/components/Button";
import GradientOverlay from "../../../../shared/components/GradientOverlay";
import OverlayCard from "../../../../shared/components/OverlayCard";

const PromotionsCard = ({ image, title, description }) => {
  return (
    <OverlayCard image={image} alt={title} className="h-72">
      <GradientOverlay />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="mb-4">{description}</p>
        </div>
        <Button>Jetzt entdecken</Button>
      </div>
    </OverlayCard>
  );
};

export default PromotionsCard;
