import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../../shared/components/Button";

const CategoryListCard = ({ categories, departments, onDelete }) => {
  const getDepartmentName = (id) => {
    const dept = departments.find((d) => d.id === id);
    return dept ? dept.departmentName || dept.title : "Unknown";
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <th>{index + 1}</th>
              <td>{getDepartmentName(category.departmentId)}</td>
              <td>{category.categoryName}</td>
              <td className="flex gap-2">
                <Button className="btn-sm btn-warning px-2" onClick={() => onDelete(category.id)}>
                  <FaTrash /> Delete
                </Button>
                <Link
                  to={`/category/edit/${category.id}`}
                  className="btn btn-sm btn-success px-2 flex items-center gap-1"
                >
                  <FaEdit /> Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryListCard;
