using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class SalvarVeiculoContract : Contract<SalvarVeiculoCommand>
    {
        public SalvarVeiculoContract(SalvarVeiculoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Descricao, "Descrição", "Descrição é obrigatória");
            Requires().IsNotNullOrEmpty(command.Placa, "Placa", "Placa é obrigatória");
            Requires().IsNotNull(command.AnoFabricacao, "Ano Fabricação", "Ano Fabricação é obrigatório");
            Requires().IsNotNull(command.AnoModelo, "Ano Modelo", "Ano Modelo é obrigatório");
            Requires().IsNotNullOrEmpty(command.Modelo, "Modelo", "Modelo é obrigatório");
            Requires().IsNotNullOrEmpty(command.Marca, "Marca", "Marca é obrigatória");
            Requires().IsNotNullOrEmpty(command.Cor, "Cor", "Cor é obrigatória");
            Requires().IsNotNull(command.Status, "Status", "Status é obrigatório");
        }
    }
}
