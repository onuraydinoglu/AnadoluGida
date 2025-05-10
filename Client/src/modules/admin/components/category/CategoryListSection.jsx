import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import Button from "../../../../shared/components/Button";
import CategoryListCard from "./CategoryListCard";

import categories from "../../../../shared/data/categories";
import departments from "../../../../shared/data/departments";

const CateogryListSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Subtitle>Category</Subtitle>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>Category</li>
            </ul>
          </div>
        </div>
        <Button className="btn btn-accent" onClick={() => navigate("/category/add")}>
          Add Category
        </Button>
      </div>

      <CategoryListCard categories={categories} departments={departments} />
    </>
  );
};

export default CateogryListSection;
