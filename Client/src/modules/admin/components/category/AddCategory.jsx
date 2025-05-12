import Button from "../../../../shared/components/Button";
import departments from "../../../../shared/data/departments";

const AddCategory = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>

      <form className="flex flex-col gap-4" action="">
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Pick a color</option>
          {departments.map((dept) => (
            <option>{dept.title}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Category name"
          className="input input-bordered w-full max-w-xs"
        />
        <Button type="submit" className="btn btn-accent w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;
