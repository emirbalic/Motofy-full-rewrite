using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Brands
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public DateTime DateOfEstablishment { get; set; }
            public string LogoUrl { get; set; }
            public string LandOfOrigin { get; set; }
            public string CityOfOrigin { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var brand = new Brand
                {
                    Id = request.Id,
                    Name = request.Name,
                    DateOfEstablishment = request.DateOfEstablishment,
                    LogoUrl = request.LogoUrl,
                    LandOfOrigin = request.LandOfOrigin,
                    CityOfOrigin = request.CityOfOrigin,
                    
                };

                _context.Brands.Add(brand);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem Saving Changes");
            }
        }
    }
}