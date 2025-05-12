using Microsoft.AspNetCore.Mvc;
using Server.Entities;
using Server.Repositories.Abstracts;

namespace Server.Controllers
{
  [ApiController]
  [Route("api/products")]
  public class ProductsController : ControllerBase
  {
    private readonly IProductRepository _productRepository;

    public ProductsController(IProductRepository productRepository)
    {
      _productRepository = productRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      var products = await _productRepository.GetAllProductsAsync();
      return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
      var product = await _productRepository.GetByIdProductAsync(id);
      if (product == null)
        return NotFound();
      return Ok(product);
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] Product product)
    {
      if (product == null || string.IsNullOrWhiteSpace(product.ProductName))
      {
        return BadRequest(new { message = "Ürün adı boş olamaz!" });
      }

      await _productRepository.AddProductAsync(product);
      return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Product product)
    {
      if (id != product.Id)
      {
        return BadRequest(new { message = "ID ile eşleşmiyor!" });
      }

      await _productRepository.UpdateProductAsync(product);
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      await _productRepository.DeleteProductAsync(id);
      return NoContent();
    }
  }
}
