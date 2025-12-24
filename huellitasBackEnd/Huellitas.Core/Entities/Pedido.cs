using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

public namespace Huellitas.Core
{
    [Table("Pedido")]
    public class Pedido
    {
        [Key]
        public int idPedido{get;set;}
        public DateTime fecha{get;set;}=DateTime.Now;

        [Column(TypeName ="decimal(18,2)")]
        public decimal total{get;set;}

        [MaxLength(50)]
        public string metodoPago {get;set;}=string.Empty;//tarjeta efectivo 

        public int idUsuario{get;set;}
        [ForeignKey("idUsuario")]
        public virtual Usuario Usuario {get;set;}=null;

        public virtual ICollection<Detalle> detalles {get;set;}= new List<Detalle>();



    }
}