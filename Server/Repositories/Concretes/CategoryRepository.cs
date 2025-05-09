using Microsoft.EntityFrameworkCore;
using Server.Entities;
using Server.Repositories.Abstracts;
using Server.Repositories.Context;

namespace Server.Repositories.Concretes
{
  public class CategoryRepository : ICategoryRepository
  {
    private readonly AppDbContext _context;

    public CategoryRepository(AppDbContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
    {
      return await _context.Categories
          .Include(c => c.Department)
          .Include(c => c.Products)
          .ToListAsync();
    }

    public async Task<Category> GetByIdCategoryAsync(int id)
    {
      return await _context.Categories
          .Include(c => c.Department)
          .Include(c => c.Products)
          .FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task AddCategoryAsync(Category category)
    {
      await _context.Categories.AddAsync(category);
      await _context.SaveChangesAsync();
    }

    public async Task UpdateCategoryAsync(Category category)
    {
      _context.Categories.Update(category);
      await _context.SaveChangesAsync();
    }

    public async Task DeleteCategoryAsync(int id)
    {
      var category = await _context.Categories.FindAsync(id);
      if (category != null)
      {
        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();
      }
    }
  }
}
