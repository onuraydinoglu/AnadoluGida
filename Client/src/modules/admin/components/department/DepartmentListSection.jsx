import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import Button from "../../../../shared/components/Button";
import DepartmentListCard from "./DepartmentListCard";

import { getDepartments, deleteDepartment } from "../../../../shared/services/departmentService";

const DepartmentListSection = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (err) {
      console.error("Veri alınamadı", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      // Silme sonrası listeyi güncelle
      setDepartments((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      console.error("Silme hatası:", err);
    }
  };

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

      <DepartmentListCard departments={departments} onDelete={handleDelete} />
    </>
  );
};

export default DepartmentListSection;
