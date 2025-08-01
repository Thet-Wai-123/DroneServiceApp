using Endpoints.Models;
using Microsoft.EntityFrameworkCore;

namespace Endpoints.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Drone> Drones { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Drone>(entity =>
            {
                entity.Property(o => o.Latitude).HasPrecision(8, 6);
                entity.Property(o => o.Latitude).HasPrecision(9, 6);
            });
        }
    }
}
