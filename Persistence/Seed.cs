using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jand",
                        UserName = "jane",
                        Email = "jane@test.com"
                    }
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if(!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Past Activity 1",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Activity 2 months ago",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                    },
                    new Activity
                    {
                        Title = "Past Activity 2",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Activity 1 month ago",
                        Category = "culture",
                        City = "Paris",
                        Venue = "Louvre",
                    },
                    new Activity
                    {
                        Title = "Future Activity 1",
                        Date = DateTime.Now.AddMonths(1),
                        Description = "Activity 1 month in future",
                        Category = "culture",
                        City = "London",
                        Venue = "Natural History Museum",
                    },
                    new Activity
                    {
                        Title = "Future Activity 2",
                        Date = DateTime.Now.AddMonths(2),
                        Description = "Activity 2 months in future",
                        Category = "music",
                        City = "London",
                        Venue = "O2 Arena",
                    },
                    new Activity
                    {
                        Title = "Future Activity 3",
                        Date = DateTime.Now.AddMonths(3),
                        Description = "Activity 3 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Another pub",
                    },
                    new Activity
                    {
                        Title = "Future Activity 4",
                        Date = DateTime.Now.AddMonths(4),
                        Description = "Activity 4 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Yet another pub",
                    },
                    new Activity
                    {
                        Title = "Future Activity 5",
                        Date = DateTime.Now.AddMonths(5),
                        Description = "Activity 5 months in future",
                        Category = "drinks",
                        City = "London",
                        Venue = "Just another pub",
                    },
                    new Activity
                    {
                        Title = "Future Activity 6",
                        Date = DateTime.Now.AddMonths(6),
                        Description = "Activity 6 months in future",
                        Category = "music",
                        City = "London",
                        Venue = "Roundhouse Camden",
                    },
                    new Activity
                    {
                        Title = "Future Activity 7",
                        Date = DateTime.Now.AddMonths(7),
                        Description = "Activity 2 months ago",
                        Category = "travel",
                        City = "London",
                        Venue = "Somewhere on the Thames",
                    },
                    new Activity
                    {
                        Title = "Future Activity 8",
                        Date = DateTime.Now.AddMonths(8),
                        Description = "Activity 8 months in future",
                        Category = "film",
                        City = "London",
                        Venue = "Cinema",
                    }
                };

                context.Activities.AddRange(activities);
                context.SaveChanges();
            }

            if(!context.Brands.Any())
            {
                var brands = new List<Brand>
                {
                    new Brand
                    {
                        Name = "Ducati",
                        DateOfEstablishment = DateTime.Now.AddYears(-94),//AddMonths(-200),
                        LogoUrl = "https://unsplash.com/photos/s0QMav76pmQ",
                        LandOfOrigin = "Italy",
                        CityOfOrigin = "Bologna",
                    },
                    new Brand
                    {
                        Name = "Honda",
                        DateOfEstablishment = DateTime.Now.AddYears(-72),
                        LogoUrl = "https://unsplash.com/photos/5CchtuTTFs8",
                        LandOfOrigin = "Japan",
                        CityOfOrigin = "Hamamatsu, Shizuoka",
                    },
                    new Brand
                    {
                        Name = "BMW",
                        DateOfEstablishment = DateTime.Now.AddYears(-104),
                        LogoUrl = "https://unsplash.com/photos/WuRsjF4iZK0",
                        LandOfOrigin = "Germany",
                        CityOfOrigin = "Munchen",
                    },
                    new Brand
                    {
                        Name = "Harley-Davidson",
                        DateOfEstablishment = DateTime.Now.AddYears(-117),
                        LogoUrl = "https://unsplash.com/photos/YRGsG4oiNIg",
                        LandOfOrigin = "USA",
                        CityOfOrigin = "Milwaukee, Wisconsin",
                    },
                 
                };

                context.Brands.AddRange(brands);
                context.SaveChanges();
            }

             if(!context.Motofies.Any())
            {
                var motofies = new List<Motofy>
                {
                    new Motofy
                    {                       
                        Name = "Lillie",
                        Model = "620 Dark",
                        BrandId = Guid.Parse("C5B26CB7-C307-4D02-8CD0-D4FB76F2B21A"),
                        CubicCentimeters = 620d,
                        PhotoUrl = "https://res.cloudinary.com/motofy/image/upload/v1542747581/htzdagawfprqsmbwkb5a.jpg",
                        Description = "The often forgotten about Multistrada 620 is an absolutely brilliant bike for those looking for a practical do-it-all that has a bit of Italian charm without too many of the associated hassles.",
                        YearOfProduction = DateTime.Now.AddYears(-15),
                        DatePublished = DateTime.Now.AddDays(-100),
                        City = "Rome",
                        PricePaid = 2000d,
                        EstimatedValue = 3000d,
                        NumberOfKilometers = 67100,
                    },
                    new Motofy
                    {
                        Name = "King",
                        Model = "Sportster",
                        BrandId = Guid.Parse("10EF9602-4FFE-4C12-A700-B5A1FDAA5A5A"),
                        CubicCentimeters = 700d,
                        PhotoUrl = "https://res.cloudinary.com/motofy/image/upload/v1542881277/hr1axmxfrz6hnnjzmqdl.jpg",
                        Description = "Harley-Davidson Sportster cusom bikes - bobbers, choppers and cafe racers. We do NOT own the video materials and all credits belong to respectful owners. In case of copyright issues, please contact us immediately for further credits or clip delete.",
                        YearOfProduction = DateTime.Now.AddYears(-25),
                        DatePublished = DateTime.Now.AddDays(-10),
                        City = "Berlin",
                        PricePaid = 4000d,
                        EstimatedValue = 4000d,
                        NumberOfKilometers = 107100,
                     
                    },
                    new Motofy
                    {
                        Name = "Fly",
                        Model = "Hornet",
                        BrandId = Guid.Parse("A9A087E3-CC75-4975-9D2C-7431C18F4ED5"),
                        CubicCentimeters = 700d,
                        PhotoUrl = "https://res.cloudinary.com/motofy/image/upload/v1543859124/qwg8b9xd4z1h9nzjvuzi.jpg",
                        Description = "Honda CB Hornet 160R is powered by the same engine that used to serve Honda CB Unicorn. It houses a 162.71cc, single-cylinder, air-cooled 4-stroke SI engine with Honda Eco Technology (HET) that is mated to 5-speed gearbox.",
                        YearOfProduction = DateTime.Now.AddYears(-8),
                        DatePublished = DateTime.Now.AddDays(-85),
                        City = "Ljubljana",
                        PricePaid = 2000d,
                        EstimatedValue = 2000d,
                        NumberOfKilometers = 30100,
                      
                    },
                    new Motofy
                    {
                        Name = "Tripp",
                        Model = "R 1200GS LC Adventure",
                        BrandId = Guid.Parse("DE1EAB9C-7CDF-4C54-A099-5ACBED9B6F3F"),
                        CubicCentimeters = 1200d,
                        PhotoUrl = "https://www.motorcyclespecs.co.za/Gallery%20B/BMW%20R1200GS%20Adventure%2014%20%203.jpg",
                        Description = "The BMW R1200GS is one of the best selling motorcycles of all time. And yet, as I prepared to make a purchase of a 2018 lowered rallye model, I found a surprising dearth of meaningful answers to my questions and concerns.",
                        YearOfProduction = DateTime.Now.AddYears(-2),
                        DatePublished = DateTime.Now.AddDays(-40),
                        City = "Zurich",
                        PricePaid = 12000d,
                        EstimatedValue = 10000d,
                        NumberOfKilometers = 7100,
                      
                    },
                 
                };

                context.Motofies.AddRange(motofies);
                context.SaveChanges();
            }
        }
    }
}