using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class ApagarVeiculoContract : Contract<ApagarVeiculoCommand>
    {
        public ApagarVeiculoContract(ApagarVeiculoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Id.ToString(), "Id", "Id é obrigatório");
            Requires().IsGreaterThan(command.Id, 0, "Id", "Id deve ser maior que 0.");
        }
    }
}
