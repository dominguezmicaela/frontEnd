using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
namespace Huellitas.Core
{
    [Table("Rol")]
    public class Rol
    {
        [Key]
        public int idRol{get;set;}
        [Required]
        [MaxLength(50)]
        public string tipoRol{ get; set;}=string.Empty;
        //relacion con rol
        public virtual ICollection<Usuario>usuarios{get;set;}=new List<Usuario>();
    }

}