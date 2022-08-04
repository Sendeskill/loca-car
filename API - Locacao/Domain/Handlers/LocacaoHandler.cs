using API_Locacao.Comum;
using Dominio.Commands.Input;
using Dominio.Commands.Output;
using Dominio.Entidades;
using Dominio.Repositorios;
using System.Threading.Tasks;

namespace Dominio.Handlers
{
    public class LocacaoHandler : ICommandHandler<SalvarLocacaoCommand>,
                                 ICommandHandler<AtualizarLocacaoCommand>,
                                 ICommandHandler<ApagarLocacaoCommand>
    {
        private readonly ILocacaoRepository repository;

        public LocacaoHandler(ILocacaoRepository repository)
        {
            this.repository = repository;
        }

        public async Task<ICommandResult> HandleAsync(SalvarLocacaoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível salvar Locação", command.Notifications);

            var locacao = new Locacao(command.Descricao, command.UsuarioId,
                                      command.VeiculoId, command.DataLocacao,
                                      command.DataDevolucao, command.Status);

            await repository.SalvarAsync(locacao);
            return new CommandResult(true, "Locação inserido com sucesso", command);

        }

        public async Task<ICommandResult> HandleAsync(AtualizarLocacaoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível atualizar Locação", command.Notifications);

            var locacao = new Locacao(command.Id, command.Descricao,
                                      command.UsuarioId, command.VeiculoId,
                                      command.DataLocacao, command.DataDevolucao, command.Status);

            await repository.AtualizarAsync(locacao);
            return new CommandResult(true, "Locação atualizado com sucesso", command);
        }

        public async Task<ICommandResult> HandleAsync(ApagarLocacaoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possivel apagar Locação", command.Notifications);
            await repository.DeletarAsync(command.Id);
            return new CommandResult(true, "Locação deletado com sucesso", command);
        }
    }
}
