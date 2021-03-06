using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
// using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace Application.Motofies
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Name { get; set; }
            // public virtual Brand Brand { get; set; } 
            public string Model { get; set; }
            public double CubicCentimeters { get; set; }
            // public string PhotoUrl { get; set; }
            public string Description { get; set; }
            public DateTime YearOfProduction { get; set; }
            public DateTime DatePublished { get; set; }
            public string City { get; set; }
            public double PricePaid { get; set; }
            public double EstimatedValue { get; set; }
            public double NumberOfKilometers { get; set; }


        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper)
            {
                _mapper = mapper;
                _userAccessor = userAccessor;
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                
                var user = await _context.Users.SingleOrDefaultAsync(
                    x => x.UserName == _userAccessor.GetCurrentUsername());

                var motofy = new Motofy
                {
                    
                    Name = request.Name,
                    // Brand = request.Brand,
                    Model = request.Model,
                    CubicCentimeters = request.CubicCentimeters,
                    Description = request.Description,
                    YearOfProduction = request.YearOfProduction,
                    NumberOfKilometers = request.NumberOfKilometers,
                    City = request.City,
                    PricePaid = request.PricePaid,
                    EstimatedValue = request.EstimatedValue,
                    DatePublished = request.DatePublished
                    
                };

                _context.Motofies.Add(motofy);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem Saving Changes");
            }
        }
    }
}