using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Motofies
{
    public class List
    {
        public class Query : IRequest<List<Motofy>> { }

        public class Handler : IRequestHandler<Query, List<Motofy>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Motofy>> Handle(Query request, CancellationToken cancellationToken)
            {
                var motofies = await _context.Motofies.ToListAsync();

                return motofies;
            }
            
        }
    }
}
