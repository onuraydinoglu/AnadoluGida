using Server.Entities;

namespace Server.Repositories.Abstracts
{
  public interface IDepartmentRepository
  {
    Task<IEnumerable<Department>> GetAllDepartmentsAsync();
    Task<Department> GetByIdDepartmentAsync(int id);
    Task AddDepartmentAsync(Department department);
    Task UpdateDepartmentAsync(Department department);
    Task DeleteDepartmentAsync(int id);
  }
}