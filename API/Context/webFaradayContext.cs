using System.Data.Entity;

public class webFaradayContext : DbContext
{
    public webFaradayContext(string connectionString) : base(connectionString)
    { }
    public DbSet<InventoEntity> Inventos { get; set; }
    public DbSet<PujaEntity> Pujas { get; set; }


    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
