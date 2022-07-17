using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class SalvarUsuarioContract : Contract<SalvarUsuarioCommand>
    {
        public SalvarUsuarioContract(SalvarUsuarioCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Nome, "Nome", "Nome é obrigatório");
            Requires().IsNotNull(command.Tipo, "Tipo", "Tipo é obrigatório");
            Requires().IsNotNullOrEmpty(command.Email, "Email", "Email é obrigatório");
            Requires().IsNotNullOrEmpty(command.Senha, "Senha", "Senha é obrigatório");
            Requires().IsNotNullOrEmpty(command.Logradouro, "Logradouro", "Logradouro é obrigatório");
            Requires().IsNotNullOrEmpty(command.Cpf, "CPF", "CPF é obrigatório");
            Requires().IsNotNullOrEmpty(command.Cidade, "Cidade", "Cidade é obrigatório");
        }
    }
}
