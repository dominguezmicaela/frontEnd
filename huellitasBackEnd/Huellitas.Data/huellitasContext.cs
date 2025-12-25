using Huellitas.Core;
using Microsoft.EntityFrameworkCore;
namespace Huellitas.Data
{
    //heredo de dbcontext para abrir y cerrar conexiones,realizar transacciones y transformar los datos
    public class HuellitasContext : DbContext
    {
        //constructor
        public HuellitasContext(DbContextOptions<HuellitasContext> options) : base(options)
        {
        }
        //propiedades
        //vaa  representar la tabla productos
        public DbSet<Producto> Productos { get; set; }

    }
}