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
                                  ICommandHandler<ApagarUsuarioCommand>,
                                  ICommandHandler<LogarUsuarioCommand>
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

            var usuario = new Usuario(command.Nome,
                                           command.Tipo,
                                           command.Email,
                                           command.Senha,
                                           command.Cpf,
                                           command.Logradouro,
                                           command.Cidade);

            await repository.SalvarAsync(usuario);
            return new CommandResult(true, "Usuário inserido com sucesso", command);

        }

        public async Task<ICommandResult> HandleAsync(AtualizarUsuarioCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível atualizar Usuário", command.Notifications);

            var salvarFilial = new Usuario(command.Id,
                                           command.Tipo,
                                           command.Nome,
                                           command.Email,
                                           command.Senha,
                                           command.Cpf,
                                           command.Logradouro,
                                           command.Cidade);

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

        public async Task<ICommandResult> HandleAsync(LogarUsuarioCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi logar Usuário", command.Notifications);
            
            var usuario = await repository.LogarAsync(command.Email, command.Senha);
            return usuario == null ? new CommandResult(false, "Usuário não encontrado", usuario) :
                                     new CommandResult(true, "Usuário logado com sucesso", usuario);
        }
    }
}
