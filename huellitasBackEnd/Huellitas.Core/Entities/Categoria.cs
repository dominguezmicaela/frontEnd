using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Huellitas.Core
{
    [Table("Categoria")]
    public class Categoria
    {
        [Key]
        public int idCategoria{get;set;}
        [Required]
        [MaxLength(100)]
        public string nombre{get;set;}=string.Empty;
        [MaxLength(255)]
        public string descripcion{get;set;}=string.Empty;
        public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
    }
}