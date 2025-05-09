using Microsoft.EntityFrameworkCore;
using Server.Entities;
using Server.Repositories.Abstracts;
using Server.Repositories.Context;

namespace Server.Repositories.Concretes
{
  public class DepartmentRepository : IDepartmentRepository
  {
    private readonly AppDbContext _context;

    public DepartmentRepository(AppDbContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<Department>> GetAllDepartmentsAsync()
    {
      return await _context.Departments.ToListAsync();
    }

    public async Task<Department> GetByIdDepartmentAsync(int id)
    {
      return await _context.Departments.FindAsync(id);
    }

    public async Task AddDepartmentAsync(Department department)
    {
      await _context.Departments.AddAsync(department);
      await _context.SaveChangesAsync();
    }

    public async Task UpdateDepartmentAsync(Department department)
    {
      _context.Departments.Update(department);
      await _context.SaveChangesAsync();
    }

    public async Task DeleteDepartmentAsync(int id)
    {
      var department = await _context.Departments.FindAsync(id);
      if (department != null)
      {
        _context.Departments.Remove(department);
        await _context.SaveChangesAsync();
      }
    }
  }
}
