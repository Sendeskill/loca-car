using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class SalvarVeiculoContract : Contract<SalvarVeiculoCommand>
    {
        public SalvarVeiculoContract(SalvarVeiculoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Descricao, "Descrição", "Descrição é obrigatória");
        }
    }
}
