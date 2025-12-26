using System. ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
namespace Huellitas.Core
{
    public  class ProductoCreacionDTO
    {
        [Required]
        public string nombre {get;set;}=string.Empty;
        public string desc{get;set;}=string.Empty;
        [Required]
        public decimal precio {get;set;}
        public string img{get;set;}=string.Empty;
        [Required]
        public int stockActual{get;set;}
        [Required]
        public int stockMinimo{get;set;}
        [Required]
        public int idCategoria{get;set;}
    }
}