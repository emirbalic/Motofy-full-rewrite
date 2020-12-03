using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Mechanics;
using System;
using MediatR;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class MechanicsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Mechanic>>> List()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        // [Authorize]
        public async Task<ActionResult<Mechanic>> Details(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
    }
}