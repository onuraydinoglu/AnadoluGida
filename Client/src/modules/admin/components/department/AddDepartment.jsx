import { useState } from "react";
import { addDepartment } from "../../../../shared/services/departmentService";
import Button from "../../../../shared/components/Button";

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form gönderildi:", departmentName); // ← BU

    if (!departmentName.trim()) return;

    try {
      await addDepartment({ departmentName });
      setDepartmentName("");
    } catch (err) {
      console.error("Ekleme hatası:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Department</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
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
