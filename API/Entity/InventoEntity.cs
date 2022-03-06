using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Invento")]
public class InventoEntity
{

    [MaxLength(25)]    
    public string nombre { get; set; }
    
    [MaxLength(60)]
    public string descr { get; set; }
    
    [MaxLength(500)]
    public string longDesc { get; set; }
    
    [MaxLength(100)]
    public string img { get; set; }
    
    public int Id { get; set; }

}
