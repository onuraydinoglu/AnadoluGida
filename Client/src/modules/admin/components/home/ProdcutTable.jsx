const ProductTable = ({ products, categories }) => {
  const getCategoryTitle = (id) => {
    const category = categories.find((cat) => cat.id === id);
    return category ? category.categoryName : "Bilinmeyen";
  };

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
            <tr key={product.id}>
              <th>{index + 1}</th>
              <td>{product.productName}</td>
              <td>{getCategoryTitle(product.categoryId)}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>{product.discount ? "Discounted" : "No discount"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
