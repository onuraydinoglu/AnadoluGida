using Microsoft.AspNetCore.Mvc;
using Server.Entities;
using Server.Repositories.Abstracts;

namespace Server.Controllers
{
  [ApiController]
  [Route("api/categories")]
  public class CategoriesController : ControllerBase
  {
    private readonly ICategoryRepository _categoryRepository;

    public CategoriesController(ICategoryRepository categoryRepository)
    {
      _categoryRepository = categoryRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      var categories = await _categoryRepository.GetAllCategoriesAsync();
      return Ok(categories);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
      var category = await _categoryRepository.GetByIdCategoryAsync(id);
      if (category == null)
        return NotFound();
      return Ok(category);
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] Category category)
    {
      if (category == null || string.IsNullOrWhiteSpace(category.CategoryName))
      {
        return BadRequest(new { message = "Kategori adı boş olamaz!" });
      }

      await _categoryRepository.AddCategoryAsync(category);
      return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Category category)
    {
      if (id != category.Id)
      {
        return BadRequest(new { message = "ID ile eşleşmiyor!" });
      }

      await _categoryRepository.UpdateCategoryAsync(category);
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      await _categoryRepository.DeleteCategoryAsync(id);
      return NoContent();
    }
  }
}
