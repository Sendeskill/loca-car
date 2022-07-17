using API_Veiculo.Comum;
using Dominio.Commands.Input;
using Dominio.Commands.Output;
using Dominio.Entidades;
using Dominio.Repositorios;
using System.Threading.Tasks;

namespace Dominio.Handlers
{
    public class VeiculoHandler : ICommandHandler<SalvarVeiculoCommand>,
                                 ICommandHandler<AtualizarVeiculoCommand>,
                                 ICommandHandler<ApagarVeiculoCommand>
    {
        private readonly IVeiculoRepository repository;

        public VeiculoHandler(IVeiculoRepository repository)
        {
            this.repository = repository;
        }

        public async Task<ICommandResult> HandleAsync(SalvarVeiculoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível salvar Veículo", command.Notifications);

            var salvarFilial = new Veiculo(command.Descricao, command.Placa, 
                                           command.AnoFabricacao, command.AnoModelo, 
                                           command.Modelo, command.Marca, 
                                           command.Cor, command.Observacao);

            await repository.SalvarAsync(salvarFilial);
            return new CommandResult(true, "Veículo inserido com sucesso", command);

        }

        public async Task<ICommandResult> HandleAsync(AtualizarVeiculoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possível atualizar Veículo", command.Notifications);

            var salvarFilial = new Veiculo(command.Descricao, command.Placa, 
                                           command.AnoFabricacao, command.AnoModelo, 
                                           command.Modelo, command.Marca, 
                                           command.Cor, command.Observacao);

            await repository.AtualizarAsync(salvarFilial);
            return new CommandResult(true, "Veículo atualizado com sucesso", command);
        }

        public async Task<ICommandResult> HandleAsync(ApagarVeiculoCommand command)
        {
            if (!command.EhValido())
                return new CommandResult(false, "Não foi possivel apagar Veículo", command.Notifications);
            await repository.DeletarAsync(command.Id);
            return new CommandResult(true, "Veículo deletado com sucesso", command);
        }
    }
}
