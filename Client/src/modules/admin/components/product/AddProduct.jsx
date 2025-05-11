import Button from "../../../../shared/components/Button";
import categories from "../../../../shared/data/categories";

const AddProduct = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      <form className="flex flex-col gap-4" action="">
        <select defaultValue="Pick a category" className="select select-bordered w-full max-w-xs">
          <option disabled>Pick a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Product name"
          className="input input-bordered w-full max-w-xs"
        />

        <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />

        <input type="number" placeholder="Stock" className="input input-bordered w-full max-w-xs" />

        <textarea
          placeholder="Description"
          className="textarea textarea-bordered w-full max-w-xs"
        ></textarea>

        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full max-w-xs"
        />

        <div className="flex items-center gap-4">
          <label className="label cursor-pointer">
            <span className="label-text">Is New?</span>
            <input type="checkbox" className="toggle toggle-accent ml-2" />
          </label>

          <label className="label cursor-pointer">
            <span className="label-text">Is Discounted?</span>
            <input type="checkbox" className="toggle toggle-secondary ml-2" />
          </label>
        </div>

        <Button type="submit" className="btn btn-accent w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
