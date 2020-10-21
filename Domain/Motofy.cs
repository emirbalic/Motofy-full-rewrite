using System;

namespace Domain
{
    public class Motofy
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public virtual Brand Brand { get; set; } //== ne radi jer ne mozes nikako dodjeliti brandId iako ga dobije...
        // public Guid BrandId { get; set; }

        // cazzzoooo , this should be brand brand and it would work like before
        // public string Brand { get; set; }
        public string Model { get; set; }
        public double CubicCentimeters { get; set; }
        public string PhotoUrl { get; set; }
        public string Description { get; set; }
        public DateTime YearOfProduction { get; set; }
        public DateTime DatePublished { get; set; }
        public string City { get; set; }
        public double? PricePaid { get; set; }
        public double? EstimatedValue { get; set; }
        public double? NumberOfKilometers { get; set; }
    }
}