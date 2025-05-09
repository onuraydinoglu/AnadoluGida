using Server.Entities;

namespace Server.Repositories.Abstracts
{
  public interface ICategoryRepository
  {
    Task<IEnumerable<Category>> GetAllCategoriesAsync();
    Task<Category> GetByIdCategoryAsync(int id);
    Task AddCategoryAsync(Category category);
    Task UpdateCategoryAsync(Category category);
    Task DeleteCategoryAsync(int id);
  }
}
