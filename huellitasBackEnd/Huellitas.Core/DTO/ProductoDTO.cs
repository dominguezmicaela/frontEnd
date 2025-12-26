namespace Huellitas.Core.DTOs
{
    public class ProductoDto
    {
        public int idProducto { get; set; } 
        public string nombre { get; set; }=string.Empty;
        public string desc { get; set; }=string.Empty;  
        public decimal precio { get; set; }
        public string img { get; set; }=string.Empty;
    }
}