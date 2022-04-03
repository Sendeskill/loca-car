using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class AtualizarUsuarioContract : Contract<AtualizarUsuarioCommand>
    {
        public AtualizarUsuarioContract(AtualizarUsuarioCommand command)
        {
            Requires().IsNotNullOrEmpty(command.ToString(), "Id", "Id é obrigatório");
            Requires().IsGreaterThan(command.Id, 0, "Id", "Id deve ser maior que 0.");
            Requires().IsNotNullOrEmpty(command.Nome, "Nome", "Nome é obrigatório");
            Requires().IsNotNullOrEmpty(command.Email, "Email", "Email é obrigatório");
        }
    }
}
