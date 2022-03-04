public interface IPujaService
{
    public IEnumerable<PujaDTO> GetAll();

    public PujaDTO GetByID(int id);

    public PujaDTO Add(BasePujaDTO id);

    public void Delete(int id);

    public PujaDTO Modify(BasePujaDTO puja, int id);
}