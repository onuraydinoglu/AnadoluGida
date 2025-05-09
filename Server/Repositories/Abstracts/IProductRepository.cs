using Server.Entities;

namespace Server.Repositories.Abstracts
{
  public interface IProductRepository
  {
    Task<IEnumerable<Product>> GetAllProductsAsync();
    Task<Product> GetByIdProductAsync(int id);
    Task AddProductAsync(Product product);
    Task UpdateProductAsync(Product product);
    Task DeleteProductAsync(int id);
  }
}
