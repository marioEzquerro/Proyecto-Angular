using AutoMapper;

public class InventoProfile : Profile
{
    public InventoProfile()
    {
        CreateMap<InventoDTO, InventoEntity>();
        CreateMap<InventoEntity, InventoDTO>();
        CreateMap<BaseInventoDTO, InventoEntity>();
        CreateMap<InventoEntity, BaseInventoDTO>();
    }
}
