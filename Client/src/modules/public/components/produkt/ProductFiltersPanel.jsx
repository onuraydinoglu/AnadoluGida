import departments from "../../../../shared/data/departments";
import categories from "../../../../shared/data/categories";

const getCategoriesByDepartment = (departmentId) => {
  return categories.filter((cat) => cat.departmentId === departmentId);
};

const ProductFiltersPanel = () => {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      {departments.map((department) => (
        <li key={department.id}>
          <details open>
            <summary>{department.title}</summary>
            <ul>
              {getCategoriesByDepartment(department.id).map((category) => (
                <li key={category.id}>
                  <a>{category.title}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  );
};

export default ProductFiltersPanel;
