namespace Server.Entities
{
  public class Department : Entity<int>
  {
    public string DepartmentName { get; set; }

    public ICollection<Category>? Categories { get; set; } = new List<Category>();
  }
}