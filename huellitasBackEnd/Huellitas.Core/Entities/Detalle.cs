using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Huellitas.Core
{
    [Table("Detalle")]
    public class Detalle
    {
        [Key]
        public int idDetalle{get; set;}
        public int cantidad {get;set;}

        [Column(TypeName = "decimal(18,2)")]
        public decimal precioUnitario{get; set;}
        // relacion con pedido
        public int idPedido
        [ForeignKey("idPedido")]
        public virtual Pedido Pedido {get;set;}=null;

        //conexion con producto
        public int idProducto{get;set;}
        [ForeignKey("idProducto")]
        public virtual Producto producto{get;set;}= null;
        
    }
}