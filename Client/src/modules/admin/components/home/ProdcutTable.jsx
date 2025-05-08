import products from "../../../../shared/data/products";
import categories from "../../../../shared/data/categories";

const getCategoryTitle = (id) => {
  const category = categories.find((cat) => cat.id === id);
  return category ? category.title : "Bilinmeyen";
};

const ProdcutTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{product.title}</td>
              <td>{getCategoryTitle(product.categoryId)}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>{product.isDiscounted ? "Discounted" : "No discount"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdcutTable;
