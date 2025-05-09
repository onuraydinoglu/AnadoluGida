import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "../../../../shared/components/Button";

const DepartmentListCard = ({ departments }) => {
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
              <td>{department.title}</td>
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

export default DepartmentListCard;
