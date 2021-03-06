﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class DropTempBrandMotofyEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Motofies");

            migrationBuilder.DropTable(
                name: "Brands");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brands",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    CityOfOrigin = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfEstablishment = table.Column<DateTime>(type: "TEXT", nullable: false),
                    LandOfOrigin = table.Column<string>(type: "TEXT", nullable: true),
                    LogoUrl = table.Column<string>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Motofies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Brand = table.Column<string>(type: "TEXT", nullable: true),
                    BrandId = table.Column<Guid>(type: "TEXT", nullable: true),
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
    }
}
