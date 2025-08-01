using Endpoints.Data;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace Endpoints
{
    public static class DroneEndpoints
    {
        public static RouteGroupBuilder MapDroneEndpoints(this RouteGroupBuilder group)
        {
            group.MapGet("/getAllAvailable", getAllAvailableDrones);
            group.MapGet("/get/{id}", getSpecificDrone);
            return group;
        }

        private static async Task<IResult> getSpecificDrone(int id, ApplicationDbContext db)
        {
            var drone = await db.Drones.FindAsync(id);
            if (drone == null)
            {
                return Results.NotFound();
            }
            return Results.Ok(drone);
        }

        private static async Task<IResult> getAllAvailableDrones(ApplicationDbContext db)
        {
            var drones = await db.Drones.ToListAsync();
            var availableDrones = drones.Where(d => d.IsAvailable).ToList();
            return Results.Ok(availableDrones);
        }
    }
}
