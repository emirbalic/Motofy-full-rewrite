using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class MotofyModelRemove : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Motofies");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Motofies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    BrandId = table.Column<Guid>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: true),
                    CubicCentimeters = table.Column<double>(type: "REAL", nullable: false),
                    DatePublished = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    EstimatedValue = table.Column<double>(type: "REAL", nullable: true),
                    Model = table.Column<string>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    NumberOfKilometers = table.Column<double>(type: "REAL", nullable: true),
                    PhotoUrl = table.Column<string>(type: "TEXT", nullable: true),
                    PricePaid = table.Column<double>(type: "REAL", nullable: true),
                    YearOfProduction = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Motofies", x => x.Id);
                });
        }
    }
}
