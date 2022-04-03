using API_Veiculo.Comum;
using Dominio.Commands.Input;
using Dominio.Handlers;
using Dominio.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API_Veiculo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VeiculoController : ControllerBase
    {
        private readonly VeiculoHandler handler;

        private readonly IVeiculoRepository repository;

        public VeiculoController(VeiculoHandler handler, IVeiculoRepository repository)
        {
            this.handler = handler;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync() =>
            Ok(await repository.ListarAsync());


        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id) =>
            Ok(await repository.ObterAsync(id));


        [HttpPost]
        public async Task<ICommandResult> PostAsync([FromBody] SalvarVeiculoCommand command)
        {
            return await handler.HandleAsync(command);
        }

        [HttpPut]
        public async Task<ICommandResult> PutAsync([FromBody] AtualizarVeiculoCommand command)
        {
            return await handler.HandleAsync(command);
        }

        [HttpDelete("{id}")]
        public async Task<ICommandResult> Delete(int id)
        {
            var command = new ApagarVeiculoCommand() { Id = id };
            return await handler.HandleAsync(command);
        }
    }
}
