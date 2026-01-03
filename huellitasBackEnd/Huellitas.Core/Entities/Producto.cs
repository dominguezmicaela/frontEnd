using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Common;


namespace Huellitas.Core.Entities{

    [Table("producto")]

    public class Producto
    {
    
        //propiedades
        [Key]
        public int  idProducto{ get; set;}
        
        [Required]
        [MaxLength(100)]
        public string nombre{get; set;} = string.Empty;// evita los errores de referencia nulos
        [Column(TypeName = "decimal(18,2)")]
        public decimal precio{get;set;}
        public string img{get;set;}=string.Empty;
        public int stockActual{get;set;}
        public int stockMinimo{get;set;}
        public int idCategoria{get;set;}
        [ForeignKey("idCategoria")]
        public virtual Categoria Categoria{get;set;}=null!;

        public string descripcion { get; set; }=string.Empty;
     


    }
}