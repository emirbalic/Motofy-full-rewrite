using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Brands;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public BrandsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Brand>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Brand>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }
    }
}