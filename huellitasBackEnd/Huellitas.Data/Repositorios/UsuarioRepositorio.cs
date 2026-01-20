using Huellitas.Core.Entities;
using Huellitas.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations.Builders;
using System.Collections.Generic;
using System.Threading.Tasks;
using Huellitas.Data;
namespace Huellitas.Data.Repositorios
{
    public class UsuarioRepositorio:IUsuarioRepositorio
    {
        private readonly HuellitasContext _context;
         
        public UsuarioRepositorio(HuellitasContext context)
        {
            _context=context;
        }
        public async Task<Usuario?> GetByEmailAsync(string email)
        {
            return await _context.Usuarios
                .Include(u => u.rol) 
                .FirstOrDefaultAsync(u => u.email== email);
        }
    }
}