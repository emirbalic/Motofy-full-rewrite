using System.Linq;
using AutoMapper;
using Domain;
namespace Application.Motofies
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // CreateMap<Motofy, MotofyDto>()
            // .ForMember(m => m.BrandId.n, o => o.MapFrom(s => s.AppUser.UserName));
           
        }
    }
}