using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Repositories.Context
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions options) : base(options)
    { }
    public DbSet<Department> Departments { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
  }
}