import Card from "../../../../shared/components/Card";
import Header from "../../../../shared/components/Header";
import Subtitle from "../../../../shared/components/Subtitle";
import departments from "../../../../shared/data/departments";
import categories from "../../../../shared/data/categories";
import products from "../../../../shared/data/products";
import Button from "../../../../shared/components/Button";

const InformationCard = ({ title }) => {
  const dataMap = {
    Departments: departments,
    Category: categories,
    Product: products,
  };

  const data = dataMap[title] || [];

  return (
    <Card>
      <Header>{title}</Header>
      <Subtitle className="text-gray-500">Total {data.length} pcs</Subtitle>
      <Button>{title} Create</Button>
    </Card>
  );
};

export default InformationCard;
