namespace YourNamespace.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; } // I ett riktigt projekt bör detta vara hashat
        // Lägg till fler egenskaper efter behov
    }
}
