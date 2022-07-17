using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class LogarUsuarioCommandContract : Contract<LogarUsuarioCommand>
    {
        public LogarUsuarioCommandContract(LogarUsuarioCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Email, "Email", "Email é obrigatório");
            Requires().IsNotNullOrEmpty(command.Senha, "Senha", "Senha é obrigatório");
        }
    }
}