import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "../../../../shared/components/Button";
import { Link } from "react-router-dom";

const ProductListCard = ({ products, categories, departments, onDelete }) => {
  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.categoryName : "Unknown Category";
  };

  const getDepartmentName = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    const department = departments.find((d) => d.id === category?.departmentId);
    return department ? department.departmentName || department.title : "Unknown Department";
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Category</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th>{index + 1}</th>
              <td>{getDepartmentName(product.categoryId)}</td>
              <td>{getCategoryName(product.categoryId)}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td className="flex gap-2">
                <Button className="btn-sm btn-warning px-2" onClick={() => onDelete(product.id)}>
                  <FaTrash /> Delete
                </Button>
                <Link
                  to={`/product/edit/${product.id}`}
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

export default ProductListCard;
