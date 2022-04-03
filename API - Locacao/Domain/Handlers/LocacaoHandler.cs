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

            var salvarFilial = new Locacao(command.Descricao);

            await repository.SalvarAsync(salvarFilial);
            return new CommandResult(true, "Locação inserido com sucesso", command);

        }

        public async Task<ICommandResult> HandleAsync(AtualizarLocacaoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível atualizar Locação", command.Notifications);

            var salvarFilial = new Locacao(command.Id,
                                            command.Descricao);

            await repository.AtualizarAsync(salvarFilial);
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
