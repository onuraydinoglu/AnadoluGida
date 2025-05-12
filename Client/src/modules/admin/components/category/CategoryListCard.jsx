import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "../../../../shared/components/Button";

const CategoryListCard = ({ categories, departments }) => {
  const getDepartmentName = (id) => {
    const dept = departments.find((d) => d.id === id);
    return dept ? dept.title : "Unknown";
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <th>{index + 1}</th>
              <td>{getDepartmentName(category.departmentId)}</td>
              <td>{category.title}</td>
              <td className="flex gap-2">
                <Button className="btn-sm btn-warning px-2">
                  <FaTrash /> Delete
                </Button>
                <Button className="btn-sm btn-success px-2">
                  <FaEdit /> Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryListCard;
