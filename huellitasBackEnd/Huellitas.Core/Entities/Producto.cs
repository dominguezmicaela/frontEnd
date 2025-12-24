using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Common;


namespace Huellitas.Core{

    [Table("producto")]

    public class Producto
    {
    
        //propiedades
        [Key]
        public int  idProducto{ get; set;}
        public string nombre{get; set;} = string.Empty;// evita los errores de referencia nulos
        public double precio{get;set;}
        public string img{get;set;}=string.Empty;
        public string desc{get;set;}=string.Empty;
        public int stockActual{get;set;}
        public int stockMinimo{get;set;}
        public int idCategoria{get;set;}
        [ForeignKey("idCategoria")]
        public virtual Categoria Categoria{get;set;}=null;

        //metodos
        //para saber si hay stock 
        public bool hayStock()
        {
            return stockActual>0;
        }

        //decrementa el stock si hay una venta
        public void vender(int cantidad)
        {
            if(cantidad<=0)
            {
                throw new Exception("la cantidad debe ser mayor a 0");
            }
            if (stockActual>=cantidad)
            {
                stockActual-=cantidad;
            }
            else
            {
                throw new Exception(" no hay suficiente stok para concretar la venta");
            }
        }


    }
}