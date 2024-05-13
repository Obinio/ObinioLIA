using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using BCrypt.Net;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(new { message = "Användare registrerad" });
        }

        [HttpPost("login")]
        public IActionResult Login(UserLoginDto loginDto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == loginDto.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
            {
                return Unauthorized(new { message = "Användarnamn eller lösenord är felaktigt" });
            }
            return Ok(new { message = "Användare inloggad", UserId = user.Id, Username = user.Username, Role = user.Role });
        }
    }
}
