using Microsoft.EntityFrameworkCore;
using backend.Models; // Anpassa namespace efter ditt projekt

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Definiera DbSet för varje modell som ska representeras i databasen
        public DbSet<User> Users { get; set; }
        public DbSet<Document> Documents { get; set; } // Lägg till denna rad
        // Lägg till fler DbSet<Modell> här för andra entiteter, t.ex.:
        // public DbSet<Document> Documents { get; set; }
    }
}
