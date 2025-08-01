using Endpoints;
using Endpoints.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Local"))
);

builder.Services.AddCors(p =>
    p.AddPolicy(
        "corsapp",
        builder =>
        {
            builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
        }
    )
);

var app = builder.Build();

app.UseCors("corsapp");

app.MapGroup("/drone").MapDroneEndpoints();

app.Run();
