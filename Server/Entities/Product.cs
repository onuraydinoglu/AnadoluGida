using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;

namespace Server.Entities
{
  public class Product : Entity<int>
  {
    public string ProductName { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
    public bool Discount { get; set; }

    public int? CategoryId { get; set; }
    public Category? Category { get; set; }
  }
}