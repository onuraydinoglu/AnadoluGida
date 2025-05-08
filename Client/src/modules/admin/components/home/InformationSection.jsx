import InformationCard from "./InformationCard";

const InformationSection = () => {
  return (
    <div className="my-10 grid grid-cols-3 gap-6">
      <InformationCard title="Departments" />
      <InformationCard title="Category" />
      <InformationCard title="Product" />
    </div>
  );
};

export default InformationSection;
