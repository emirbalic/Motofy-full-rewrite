using System;
using System.Text.Json.Serialization;

namespace Application.Motofies
{
    public class MotofyDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        [JsonPropertyName("BrandName")]
        public string BrandId { get; set; }
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