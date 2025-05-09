using Microsoft.AspNetCore.Mvc;
using Server.Entities;
using Server.Repositories.Abstracts;

namespace Server.Controllers
{
  [ApiController]
  [Route("api/departments")]
  public class DepartmentsController : ControllerBase
  {
    private readonly IDepartmentRepository _departmentRepository;

    public DepartmentsController(IDepartmentRepository departmentRepository)
    {
      _departmentRepository = departmentRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      var departments = await _departmentRepository.GetAllDepartmentsAsync();
      return Ok(departments);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
      var department = await _departmentRepository.GetByIdDepartmentAsync(id);
      if (department == null)
        return NotFound();
      return Ok(department);
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] Department department)
    {
      if (department == null || string.IsNullOrWhiteSpace(department.DepartmentName))
      {
        return BadRequest(new { message = "Bölüm adı boş olamaz!" });
      }

      await _departmentRepository.AddDepartmentAsync(department);
      return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Department department)
    {
      if (id != department.Id)
      {
        return BadRequest(new { message = "ID ile eşleşmiyor!" });
      }

      await _departmentRepository.UpdateDepartmentAsync(department);
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      await _departmentRepository.DeleteDepartmentAsync(id);
      return NoContent();
    }
  }
}
