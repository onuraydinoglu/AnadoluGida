using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Server.Entities;
using Server.Repositories.Context;

namespace Server.Repositories
{
  public static class SeedData
  {
    public static void TestData(IApplicationBuilder app)
    {
      using var scope = app.ApplicationServices.CreateScope();
      var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

      if (!context.Departments.Any())
      {
        context.Departments.AddRange(
        new Department { DepartmentName = "Markt" },
        new Department { DepartmentName = "Gemüsehändler" },
        new Department { DepartmentName = "Metzgerei" }
    );

        context.SaveChanges();
      }

      if (!context.Categories.Any())
      {
        context.Categories.AddRange(
            new Category { CategoryName = "Süßigkeiten", DepartmentId = 1 },
            new Category { CategoryName = "Limonade", DepartmentId = 2 },
            new Category { CategoryName = "Hähnchen", DepartmentId = 3 },
            new Category { CategoryName = "Saft", DepartmentId = 1 },
            new Category { CategoryName = "Ernte", DepartmentId = 1 }
        );
        context.SaveChanges();
      }


      if (!context.Products.Any())
      {
        context.Products.AddRange(
            new Product
            {
              ProductName = "Ülker Dubai Schokolade",
              Description = "Dubai-inspirierte köstliche Ülker Schokolade.",
              Price = 1.99m,
              Stock = 40,
              Discount = false,
              CategoryId = 1
            },
            new Product
            {
              ProductName = "Niğde Limonade (330 ml)",
              Description = "Erfrischende klassische türkische Limonade.",
              Price = 0.89m,
              Stock = 70,
              Discount = false,
              CategoryId = 2
            },
            new Product
            {
              ProductName = "Indomie Scharfe Hähnchen-Nudeln",
              Description = "Würzige Instantnudeln mit Hähnchengeschmack.",
              Price = 0.75m,
              Stock = 90,
              Discount = false,
              CategoryId = 3
            },
            new Product
            {
              ProductName = "Nestlé Damak Bitter mit Pistazien",
              Description = "Intensiver Bitterschmack mit Pistazien.",
              Price = 2.49m,
              Stock = 30,
              Discount = false,
              CategoryId = 1
            },
            new Product
            {
              ProductName = "Eti Wanted Karamellriegel",
              Description = "Schokoriegel mit Karamellfüllung.",
              Price = 1.15m,
              Stock = 50,
              Discount = false,
              CategoryId = 1
            },
            new Product
            {
              ProductName = "Fuse Tea Pfirsich – Zuckerfrei",
              Description = "Eistee mit Pfirsichgeschmack ohne Zucker.",
              Price = 0.99m,
              Stock = 60,
              Discount = false,
              CategoryId = 4
            },
            new Product
            {
              ProductName = "Frische Tomaten",
              Description = "Saftige, sonnengereifte Tomaten.",
              Price = 1.25m,
              Stock = 100,
              Discount = true,
              CategoryId = 5
            },
            new Product
            {
              ProductName = "Grüne Paprika",
              Description = "Frische grüne Frühstückspaprika.",
              Price = 0.95m,
              Stock = 85,
              Discount = true,
              CategoryId = 5
            },
            new Product
            {
              ProductName = "Auberginen",
              Description = "Große Auberginen – ideal für gefüllte Gerichte.",
              Price = 1.35m,
              Stock = 75,
              Discount = true,
              CategoryId = 5
            },
            new Product
            {
              ProductName = "Kartoffel",
              Description = "Vielseitige, festkochende Kartoffeln für alle Gerichte.",
              Price = 1.35m,
              Stock = 55,
              Discount = true,
              CategoryId = 5
            },
            new Product
            {
              ProductName = "Zwiebel",
              Description = "Aromatische Zwiebeln – unverzichtbar für jede Küche.",
              Price = 1.35m,
              Stock = 55,
              Discount = true,
              CategoryId = 5
            },
            new Product
            {
              ProductName = "Spitzpaprika",
              Description = "Süße, knackige Spitzpaprika – ideal zum Füllen oder Grillen.",
              Price = 1.35m,
              Stock = 55,
              Discount = true,
              CategoryId = 5
            },
            new Product
            {
              ProductName = "Gurken",
              Description = "Erfrischende Gurken – perfekt für Salate und Snacks.",
              Price = 1.35m,
              Stock = 55,
              Discount = true,
              CategoryId = 5
            }
        );
        context.SaveChanges();
      }

    }
  }
}
