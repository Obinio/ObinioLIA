using Microsoft.AspNetCore.Mvc;
using YourNamespace.Models;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        // Här skulle du ha en tjänst för att hantera användardata, t.ex. en databastjänst
        // För demonstrationens skull håller vi det enkelt

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            // Registrera användaren
            // I ett riktigt projekt, validera input och hash lösenord
            return Ok(new { message = "Användare registrerad" });
        }

        [HttpPost("login")]
        public IActionResult Login(User user)
        {
            // Autentisera användaren
            // I ett riktigt projekt, validera användarnamn och lösenord mot databasen
            return Ok(new { message = "Användare inloggad" });
        }
    }
}
