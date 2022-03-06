public interface IInventoService
{
    public IEnumerable<InventoDTO> GetAll();

    public InventoDTO GetByID(int id);

    public IEnumerable<PujaDTO> GetPujas(int id); 

    public InventoDTO Add(BaseInventoDTO id);

    public void Delete(int guid);

    public InventoDTO Modify(BaseInventoDTO book, int id);
}