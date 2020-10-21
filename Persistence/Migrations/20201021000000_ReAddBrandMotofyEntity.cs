using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ReAddBrandMotofyEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brands",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    DateOfEstablishment = table.Column<DateTime>(nullable: false),
                    LogoUrl = table.Column<string>(nullable: true),
                    LandOfOrigin = table.Column<string>(nullable: true),
                    CityOfOrigin = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Motofies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    BrandId = table.Column<Guid>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    CubicCentimeters = table.Column<double>(nullable: false),
                    PhotoUrl = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    YearOfProduction = table.Column<DateTime>(nullable: false),
                    DatePublished = table.Column<DateTime>(nullable: false),
                    City = table.Column<string>(nullable: true),
                    PricePaid = table.Column<double>(nullable: true),
                    EstimatedValue = table.Column<double>(nullable: true),
                    NumberOfKilometers = table.Column<double>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Motofies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Motofies_Brands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "Brands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Motofies_BrandId",
                table: "Motofies",
                column: "BrandId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Motofies");

            migrationBuilder.DropTable(
                name: "Brands");
        }
    }
}
