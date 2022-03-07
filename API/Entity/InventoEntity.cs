using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Invento")]
public class InventoEntity
{


    public string nombre { get; set; }


    public string descr { get; set; }


    public string longDesc { get; set; }

    public string img { get; set; }

    public int Id { get; set; }

}
