using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Brands
{
    public class Details
    {
         public class Query : IRequest<Brand>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Brand>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Brand> Handle(Query request, CancellationToken cancellationToken)
            {
                var brand  = await _context.Brands.FindAsync(request.Id);

                return brand;
            }
           
        }
    }
}