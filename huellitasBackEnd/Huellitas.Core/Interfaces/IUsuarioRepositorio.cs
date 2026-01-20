using Huellitas.Core.Entities;
using System.Threading.Tasks;

namespace Huellitas.Core.Interfaces
{
    public interface IUsuarioRepositorio
    {
        Task<Usuario> GetByEmailAsync(string email);
        
    }
}