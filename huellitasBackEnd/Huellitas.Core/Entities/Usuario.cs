using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
namespace Huellitas.Core
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        public int  idUsuario{get;set;}
        [Required]
        [MaxLength(100)]
        public string nombre{get;set;}=string.Empty;
        [Required]
        [MaxLength(100)]
        [EmailAddress]
        public string email{get;set;}=string.Empty;
        [Required]
        public string passwordHash{get; set;}=string.Empty;
        [MaxLength(250)]
        public string direccion{get;set;}=string.Empty;
        [MaxLength(50)]
        public string segmentoCliente{get;set;}=string.Empty;
        //rel con rol
        public int idRol{get;set;}
        [ForeignKey("idRol")]
        public virtual Rol rol{get;set;}=null!;
        //realcion con pedidos
        public virtual ICollection<Pedido> Pedidos{get;set;}=new List<Pedido>();
        
    }
}