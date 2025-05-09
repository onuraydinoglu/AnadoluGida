import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import Button from "../../../../shared/components/Button";
import DepartmentListCard from "./DepartmentListCard";

import departments from "../../../../shared/data/departments";

const DepartmentListSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Subtitle>Department</Subtitle>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>Department</li>
            </ul>
          </div>
        </div>
        <Button className="btn btn-accent" onClick={() => navigate("/department/add")}>
          Add Department
        </Button>
      </div>

      <DepartmentListCard departments={departments} />
    </>
  );
};

export default DepartmentListSection;
