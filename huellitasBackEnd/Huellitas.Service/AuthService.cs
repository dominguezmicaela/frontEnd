using Huellitas.Core.DTO.Auth;
using Huellitas.Core.Interfaces;
using Huellitas.Core.Entities; // Para acceder a la entidad Usuario
using Microsoft.Extensions.Configuration; // Para leer appsettings.json
using Microsoft.IdentityModel.Tokens; // Para crear el Token
using System.IdentityModel.Tokens.Jwt; // Para manejar JWT
using System.Security.Claims; // Para los datos dentro del Token
using System.Text; 
using BCrypt.Net;
using Huellitas.Service.Interfaces; // Para verificar la contraseña

namespace huellitas.Service
{
    public class AuthService : IAuthService
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly IConfiguration _configuration;
        public AuthService (IUsuarioRepositorio usuarioRepositorio,IConfiguration configuration)
        {
            _usuarioRepositorio=usuarioRepositorio;
            _configuration=configuration;
        }
        public async Task<string> LoginAsync(LoginDto loginDto)
        {
            var usuario= await _usuarioRepositorio.GetByEmailAsync(loginDto.Email);
            if(usuario==null)
            {
                return null;
            }
            bool passwordValida=false;
            try
            {
                passwordValida=BCrypt.Net.BCrypt.Verify(loginDto.Password, usuario.passwordHash);

            }
            catch
            {
                passwordValida=(loginDto.Password==usuario.passwordHash);
            }
            if(!passwordValida)
            {
                return null;
            }
            return GenerararToken(usuario);
        }
        private string GenerararToken(Usuario usuario)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var secretKey = jwtSettings["Key"];
            var issuer = jwtSettings["Issuer"];
            var audience = jwtSettings["Audience"];

            var key = Encoding.ASCII.GetBytes(secretKey);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, usuario.idUsuario.ToString()),
                new Claim(ClaimTypes.Email, usuario.email),
                new Claim(ClaimTypes.Role, usuario.idRol == 1 ? "Admin" : "Cliente")
                
            };
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(1), 
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = issuer,
                Audience = audience
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}