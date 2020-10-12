using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class MotofyAddedBrandUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bio",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Motofies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    BrandId = table.Column<Guid>(nullable: false),
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
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.DropColumn(
                name: "Bio",
                table: "AspNetUsers");
        }
    }
}
