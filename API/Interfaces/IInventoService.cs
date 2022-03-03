public interface IInventoService
{
    public IEnumerable<InventoDTO> GetAll();

    public InventoDTO GetByID(int guid);

    public InventoDTO Add(BaseInventoDTO guid);

    public void Delete(int guid);

    public InventoDTO Modify(BaseInventoDTO book, int guid);
}