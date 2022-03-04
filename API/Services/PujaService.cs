using AutoMapper;

public class PujaService : IPujaService
{
    private readonly webFaradayContext _context;
    private readonly IMapper _mapper;

    public PujaService(webFaradayContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public PujaDTO Add(BasePujaDTO basePuja)
    {
        var _mappedPuja = _mapper.Map<PujaEntity>(basePuja);
        var entityAdded = _context.Pujas.Add(_mappedPuja);
        _context.SaveChanges();
        return _mapper.Map<PujaDTO>(entityAdded);
    }

    public void Delete(int id)
    {
        PujaEntity puja = _context.Pujas.FirstOrDefault(x => x.id == id);

        if (puja == null)
            throw new ApplicationException($"Bokk with id {id} not found");

        _context.Pujas.Remove(puja);
        _context.SaveChanges();
    }

    public IEnumerable<PujaDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<PujaDTO>>(_context.Pujas.Select(x => x));
    }

    public PujaDTO GetByID(int id)
    {
        return _mapper.Map<PujaDTO>(_context.Pujas.FirstOrDefault(x => x.id == id));
    }

    public PujaDTO Modify(BasePujaDTO puja, int id)
    {
        var _mappedPuja = _mapper.Map<PujaEntity>(puja);
        _mappedPuja.id = id;

        PujaEntity modifiedPuja = _context.Pujas.FirstOrDefault(x => x.id == id);

        if (modifiedPuja == null)
            return null;

        _context.Entry(modifiedPuja).CurrentValues.SetValues(_mappedPuja);

        _context.SaveChanges();

        return _mapper.Map<PujaDTO>(_mappedPuja);
    }

}