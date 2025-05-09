import Button from "../../../../shared/components/Button";

const AddDepartment = () => {
  console.log("🚀 AddDepartment page rendered");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Department</h2>

      <form className="flex flex-col gap-4" action="">
        <input
          type="text"
          placeholder="Department name"
          className="input input-bordered w-full max-w-xs"
        />
        <Button type="submit" className="btn btn-accent w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddDepartment;
