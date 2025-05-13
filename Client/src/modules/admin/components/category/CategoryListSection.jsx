import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Subtitle from "../../../../shared/components/Subtitle";
import Button from "../../../../shared/components/Button";
import CategoryListCard from "./CategoryListCard";
import { getCategories, deleteCategory } from "../../../../shared/services/categoryService";
import { getDepartments } from "../../../../shared/services/departmentService";

const CategoryListSection = () => {
  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const [categoryData, departmentData] = await Promise.all([getCategories(), getDepartments()]);
      setCategories(categoryData);
      setDepartments(departmentData);
    };

    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteCategory(id);
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

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
      <CategoryListCard categories={categories} departments={departments} onDelete={handleDelete} />
    </>
  );
};

export default CategoryListSection;
