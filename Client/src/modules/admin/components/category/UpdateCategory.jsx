import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategoryById, updateCategory } from "../../../../shared/services/categoryService";
import { getDepartments } from "../../../../shared/services/departmentService";
import Button from "../../../../shared/components/Button";

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [category, deptData] = await Promise.all([getCategoryById(id), getDepartments()]);

      setCategoryName(category.categoryName);
      setDepartmentId(category.departmentId);
      setDepartments(deptData);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCategory(id, {
      id: parseInt(id),
      categoryName,
      departmentId: parseInt(departmentId),
    });
    navigate("/category");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Category</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <select
          className="select"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
          required
        >
          <option disabled value="">
            Select Department
          </option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.departmentName || dept.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <div className="flex gap-4">
          <Button type="button" className="btn-outline" onClick={() => navigate("/category")}>
            Cancel
          </Button>
          <Button type="submit" className="btn btn-accent w-fit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
