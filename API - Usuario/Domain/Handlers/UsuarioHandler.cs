using API_Usuario.Comum;
using Dominio.Commands.Input;
using Dominio.Commands.Output;
using Dominio.Entidades;
using Dominio.Repositorios;
using System.Threading.Tasks;

namespace Dominio.Handlers
{
    public class UsuarioHandler : ICommandHandler<SalvarUsuarioCommand>,
                                 ICommandHandler<AtualizarUsuarioCommand>,
                                 ICommandHandler<ApagarUsuarioCommand>
    {
        private readonly IUsuarioRepository repository;

        public UsuarioHandler(IUsuarioRepository repository)
        {
            this.repository = repository;
        }

        public async Task<ICommandResult> HandleAsync(SalvarUsuarioCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível salvar Usuário", command.Notifications);

            var salvarFilial = new Usuario(command.Nome,command.Email);

            await repository.SalvarAsync(salvarFilial);
            return new CommandResult(true, "Usuário inserido com sucesso", command);

        }

        public async Task<ICommandResult> HandleAsync(AtualizarUsuarioCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível atualizar Usuário", command.Notifications);

            var salvarFilial = new Usuario(command.Id,
                                            command.Nome,
                                            command.Email);

            await repository.AtualizarAsync(salvarFilial);
            return new CommandResult(true, "Usuário atualizado com sucesso", command);
        }

        public async Task<ICommandResult> HandleAsync(ApagarUsuarioCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possivel apagar Usuário", command.Notifications);
            await repository.DeletarAsync(command.Id);
            return new CommandResult(true, "Usuário deletado com sucesso", command);
        }
    }
}
