using System;

namespace Domain
{
    public class Motofy
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        // todo: see the bands for photo
        public string PhotoUrl {get; set;}
        public string Description { get; set; }
        public Brand Brand { get; set; }
        public DateTime DatePublished { get; set; }
        public string City { get; set; }
        public double PricePaid { get; set; }
        public double EstimatedValue { get; set; }
        public double NumberOfKilometers { get; set; }

    }
}