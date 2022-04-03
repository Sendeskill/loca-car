using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class ApagarUsuarioContract : Contract<ApagarUsuarioCommand>
    {
        public ApagarUsuarioContract(ApagarUsuarioCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Id.ToString(), "Id", "Id é obrigatório");
            Requires().IsGreaterThan(command.Id, 0, "Id", "Id deve ser maior que 0.");
        }
    }
}
