import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "../../../../shared/components/Button";

const ProductListCard = ({ products, categories, departments }) => {
  // Kategori adı bulur
  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.title : "Unknown Category";
  };

  // Departman adı bulur
  const getDepartmentName = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    const department = departments.find((d) => d.id === category?.departmentId);
    return department ? department.title : "Unknown Department";
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Category Name</th>
            <th>Product Name</th>
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
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
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

export default ProductListCard;
