import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../../shared/components/Button";

const DepartmentListCard = ({ departments, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={department.id}>
              <th>{index + 1}</th>
              <td>{department.departmentName}</td>
              <td className="flex gap-2">
                <Button className="btn-sm btn-warning px-2" onClick={() => onDelete(department.id)}>
                  <FaTrash /> Delete
                </Button>
                <Link
                  to={`/department/edit/${department.id}`}
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

export default DepartmentListCard;
