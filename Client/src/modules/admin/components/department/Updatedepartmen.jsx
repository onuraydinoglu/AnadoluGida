import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDepartmentById, updateDepartment } from "../../../../shared/services/departmentService";
import Button from "../../../../shared/components/Button";

const UpdateDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [departmentName, setDepartmentName] = useState("");

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const data = await getDepartmentById(id);
        setDepartmentName(data.departmentName);
      } catch (err) {
        console.error("Departman bilgisi alınamadı", err);
      }
    };

    fetchDepartment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDepartment(id, {
        id: parseInt(id),
        departmentName,
      });
      navigate("/department");
    } catch (err) {
      console.error("Güncelleme hatası", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Department</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Department name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <div className="flex gap-4">
          <Button type="button" className="btn-outline" onClick={() => navigate("/department")}>
            İptal
          </Button>
          <Button type="submit" className="btn btn-accent">
            Güncelle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDepartment;
