using Microsoft.EntityFrameworkCore;
using Server.Entities;
using Server.Repositories.Abstracts;
using Server.Repositories.Context;

namespace Server.Repositories.Concretes
{
  public class ProductRepository : IProductRepository
  {
    private readonly AppDbContext _context;

    public ProductRepository(AppDbContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<Product>> GetAllProductsAsync()
    {
      return await _context.Products
          .Include(p => p.Category)
          .ToListAsync();
    }

    public async Task<Product> GetByIdProductAsync(int id)
    {
      return await _context.Products
          .Include(p => p.Category)
          .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task AddProductAsync(Product product)
    {
      await _context.Products.AddAsync(product);
      await _context.SaveChangesAsync();
    }

    public async Task UpdateProductAsync(Product product)
    {
      _context.Products.Update(product);
      await _context.SaveChangesAsync();
    }

    public async Task DeleteProductAsync(int id)
    {
      var product = await _context.Products.FindAsync(id);
      if (product != null)
      {
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
      }
    }
  }
}
