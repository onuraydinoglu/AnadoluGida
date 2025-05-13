import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../../../shared/components/Button";
import { getCategories } from "../../../../shared/services/categoryService";
import { getProductById, updateProduct } from "../../../../shared/services/productService";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [product, categoryData] = await Promise.all([getProductById(id), getCategories()]);

        setProductName(product.productName);
        setPrice(product.price);
        setStock(product.stock);
        setDescription(product.description);
        setDiscount(product.discount);
        setCategoryId(product.categoryId);
        setCategories(categoryData);
      } catch (err) {
        console.error("Veriler alınırken hata oluştu", err);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, {
        id: parseInt(id),
        productName,
        price: parseFloat(price),
        stock: parseInt(stock),
        description,
        discount,
        categoryId: parseInt(categoryId),
      });
      navigate("/product");
    } catch (err) {
      console.error("Güncelleme hatası:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <select
          className="select select-bordered w-full max-w-xs"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option disabled value="">
            Pick a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full max-w-xs"
        />

        <label className="label cursor-pointer">
          <span className="label-text">Is Discounted?</span>
          <input
            type="checkbox"
            className="toggle toggle-secondary ml-2"
            checked={discount}
            onChange={(e) => setDiscount(e.target.checked)}
          />
        </label>

        <div className="flex gap-4">
          <Button type="button" className="btn-outline" onClick={() => navigate("/product")}>
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

export default UpdateProduct;
