using System;
using System.Collections.Generic;

namespace Domain
{
    public class Motofy
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public Guid BrandId { get; set; }
        public double CubicCentimeters { get; set; }
        public string PhotoUrl {get; set;}

        // da moracu nekad i ovo dodati
        // public int OwnerId { get; set; }

        // todo: see the bands for photo
        // public ICollection<Photo> Photos { get; set; }

        public string Description { get; set; }
        public DateTime YearOfProduction { get; set; }
        public DateTime DatePublished { get; set; }
        public string City { get; set; }
        public double? PricePaid { get; set; }
        public double? EstimatedValue { get; set; }
        public double? NumberOfKilometers { get; set; }

    }
}