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
        public string nombre{get;set;}=string.Empty;
        public string descripcion{get;set;}=string.Empty;
    }
}