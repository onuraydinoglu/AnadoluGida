namespace Server.Entities
{
  public class Category : Entity<int>
  {
    public string CategoryName { get; set; }

    public int? DepartmentId { get; set; }
    public Department? Department { get; set; }
    public ICollection<Product>? Products { get; set; } = new List<Product>();
  }
}