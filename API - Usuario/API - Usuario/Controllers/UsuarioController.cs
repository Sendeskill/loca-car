using API_Usuario.Comum;
using Dominio.Commands.Input;
using Dominio.Handlers;
using Dominio.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API_Usuario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioHandler handler;

        private readonly IUsuarioRepository repository;

        public UsuarioController(UsuarioHandler handler, IUsuarioRepository repository)
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
        public async Task<ICommandResult> PostAsync([FromBody] SalvarUsuarioCommand command)
        {
            return await handler.HandleAsync(command);
        }

        [HttpPut]
        public async Task<ICommandResult> PutAsync([FromBody] AtualizarUsuarioCommand command)
        {
            return await handler.HandleAsync(command);
        }

        [HttpDelete("{id}")]
        public async Task<ICommandResult> Delete(int id)
        {
            var command = new ApagarUsuarioCommand() { Id = id };
            return await handler.HandleAsync(command);
        }
    }
}
