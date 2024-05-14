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

        // POST: /Auth/register
        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            // Kontrollera att alla obligatoriska fält är ifyllda
            if (string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Password) || string.IsNullOrWhiteSpace(user.Username))
            {
                return BadRequest(new { message = "Email, password and username are required." });
            }

            // Kontrollera att e-postadressen inte redan används
            if (_context.Users.Any(x => x.Email == user.Email))
            {
                return BadRequest(new { message = "Email \"" + user.Email + "\" is already taken." });
            }

            // Hasha användarens lösenord innan det sparas i databasen
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            // Lägg till användaren i databasen
            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(new { message = "User registered successfully." });
        }

        // POST: /Auth/login
        [HttpPost("login")]
        public IActionResult Login(UserLoginDto loginDto)
        {
            var user = _context.Users.SingleOrDefault(x => x.Email == loginDto.Email);
            if (user == null)
            {
                return Unauthorized(new { message = "User not found." });
            }

            // Verifiera att det inmatade lösenordet stämmer med det hashade lösenordet i databasen
            if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
            {
                return Unauthorized(new { message = "Password is incorrect." });
            }

            // Autentisering lyckades, returnera användarens data
            return Ok(new { message = "User logged in successfully.", UserId = user.Id, Username = user.Username, Role = user.Role });
        }
    }
}
