using Microsoft.AspNetCore.Mvc;
using Huellitas.Data; 
using Huellitas.Core;     
using Microsoft.EntityFrameworkCore;
using System.IO.Compression;

namespace Huellitas.Api.Controllers
{
    [Route("api/[controller]")] // Define que la url será /api/productos
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly HuellitasContext _context;

        // El constructor recibe la conexion a la base de datos
        public ProductosController(HuellitasContext context)
        {
            _context = context;
        }

        //OBTENER TODOS
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
        {
            return await _context.Productos.ToListAsync();
        }
        //obtener uno solo 
        [HttpGet("{idProducto}")]
        public async Task <ActionResult<Producto>> GetProducto(int id)
        {
            var producto=await _context.Productos.FindAsync(id);
            if (producto == null)
            {
                return NotFound("El producto no existee");
            }
            return producto;
        }

        // GUARDAR
        [HttpPost]
        public async Task<ActionResult<Producto>> PostProducto(Producto producto)
        {
            _context.Productos.Add(producto);
            await _context.SaveChangesAsync(); // ¡Aquí es donde se guarda en SQL Server!

            return CreatedAtAction("GetProductos", new { id = producto.idProducto }, producto);
        }
        //BORRAR
        // BORRAR (Versión para Base de Datos)
        [HttpDelete("{idProducto}")]
        public async Task<IActionResult> DeleteProducto(int id)
        {
            //busca el producto en la bdd usando el _context
            var producto = await _context.Productos.FindAsync(id);

            // si no encuentre 404
            if (producto == null)
            {
                return NotFound("El producto no existe");
            }

            // si existe lo borro
            _context.Productos.Remove(producto);

            // guardar los cambips en la bdd
            await _context.SaveChangesAsync(); 


            return Ok("Producto eliminado correctamente");
        }
        //ACTUALIZAR
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducto(int id, Producto producto)
        {
            // verificacion de id
            if (id != producto.idProducto)
            {
                return BadRequest("El ID no coincide");
            }

            // producto modificado
            _context.Entry(producto).State = EntityState.Modified;

            try
            {
                // guardo cambios
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Si hay un error de concurrencia
                // verificamos si el producto realmente existe
                if (!_context.Productos.Any(e => e.idProducto == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // valor de retorno
            return NoContent();
        }
    }
}