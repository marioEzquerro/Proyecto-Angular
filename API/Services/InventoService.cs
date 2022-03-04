using AutoMapper;

public class InventoService : IInventoService
{
    private readonly webFaradayContext _context;
    private readonly IMapper _mapper;

    public InventoService(webFaradayContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public InventoDTO Add(BaseInventoDTO baseInvento)
    {
        var _mappedInvento = _mapper.Map<InventoEntity>(baseInvento);
        var entityAdded = _context.Inventos.Add(_mappedInvento);
        _context.SaveChanges();
        return _mapper.Map<InventoDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        InventoEntity invento = _context.Inventos.FirstOrDefault(x => x.Id == guid);

        if (invento == null)
            throw new ApplicationException($"Bokk with id {guid} not found");

        _context.Inventos.Remove(invento);
        _context.SaveChanges();
    }

    public IEnumerable<InventoDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<InventoDTO>>(_context.Inventos.Select(x => x));
    }

    public InventoDTO GetByID(int guid)
    {
        return _mapper.Map<InventoDTO>(_context.Inventos.FirstOrDefault(x => x.Id == guid));
    }

    public List<PujaDTO> GetPujas(int id)
    {
        return _mapper.Map<List<PujaDTO>>(_context.Pujas.Where(x => x.idInvento == id).OrderByDescending(x => x.cantidad).First());
    }

    public InventoDTO Modify(BaseInventoDTO invento, int guid)
    {
        var _mappedInvento = _mapper.Map<InventoEntity>(invento);
        _mappedInvento.Id = guid;

        InventoEntity modifiedInvento = _context.Inventos.FirstOrDefault(x => x.Id == guid);

        if (modifiedInvento == null)
            return null;

        _context.Entry(modifiedInvento).CurrentValues.SetValues(_mappedInvento);

        _context.SaveChanges();

        return _mapper.Map<InventoDTO>(_mappedInvento);
    }

}