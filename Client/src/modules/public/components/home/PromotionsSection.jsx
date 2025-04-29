import PromotionsCard from "./PromotionsCard";

import manav from "../../../../shared/assets/images/manav.png";
import kasap from "../../../../shared/assets/images/kasap.png";

const PromotionsSection = () => {
  return (
    <div className="my-25">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PromotionsCard
          image={manav}
          title="Frisches Gemüse"
          description="Bis zu 30 % Rabatt auf frisches und biologisches Gemüse."
        />
        <PromotionsCard
          image={kasap}
          title="Metzger-Angebot"
          description="25 % Rabatt auf hochwertiges Fleisch und beste Metzgerstücke."
        />
      </div>
    </div>
  );
};

export default PromotionsSection;
