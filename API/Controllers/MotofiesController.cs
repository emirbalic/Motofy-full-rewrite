using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Motofies;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{

    public class MotofiesController : BaseController
    {

        [HttpGet]
        [AllowAnonymous]
         public async Task<ActionResult<List<Motofy>>> List()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}