using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Lägg till CORS-tjänsten i IServiceCollection
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policyBuilder => policyBuilder.WithOrigins("http://localhost:3000") // Ändra till din frontend URL
                                      .AllowAnyHeader()
                                      .AllowAnyMethod());
});

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Lägg till DbContext
builder.Services.AddDbContext<backend.Data.ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Konfigurera CORS att använda den definierade policyn
app.UseCors("AllowSpecificOrigin");

// Använd resterande middleware
//app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
