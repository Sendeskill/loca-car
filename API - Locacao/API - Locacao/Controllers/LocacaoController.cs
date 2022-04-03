using API_Locacao.Comum;
using Dominio.Commands.Input;
using Dominio.Handlers;
using Dominio.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API_Locacao.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocacaoController : ControllerBase
    {
        private readonly LocacaoHandler handler;

        private readonly ILocacaoRepository repository;

        public LocacaoController(LocacaoHandler handler, ILocacaoRepository repository)
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
        public async Task<ICommandResult> PostAsync([FromBody] SalvarLocacaoCommand command)
        {
            return await handler.HandleAsync(command);
        }

        [HttpPut]
        public async Task<ICommandResult> PutAsync([FromBody] AtualizarLocacaoCommand command)
        {
            return await handler.HandleAsync(command);
        }

        [HttpDelete("{id}")]
        public async Task<ICommandResult> Delete(int id)
        {
            var command = new ApagarLocacaoCommand() { Id = id };
            return await handler.HandleAsync(command);
        }
    }
}
