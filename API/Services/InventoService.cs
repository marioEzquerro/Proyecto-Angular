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

    public InventoDTO Add(BaseInventoDTO baseBook)
    {
        var _mappedBook = _mapper.Map<InventoEntity>(baseBook);
        var entityAdded = _context.Inventos.Add(_mappedBook);
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

    public InventoDTO Modify(BaseInventoDTO invento, int guid)
    {
        var _mappedBook = _mapper.Map<InventoEntity>(invento);
        _mappedBook.Id = guid;

        InventoEntity modifiedBook = _context.Inventos.FirstOrDefault(x => x.Id == guid);

        if (modifiedBook == null)
            return null;

        _context.Entry(modifiedBook).CurrentValues.SetValues(_mappedBook);

        _context.SaveChanges();

        return _mapper.Map<InventoDTO>(_mappedBook);
    }

}