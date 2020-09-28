using System;

namespace Domain
{
    public class Photo
    {
        public int Id { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime DateAdded { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
    }
}