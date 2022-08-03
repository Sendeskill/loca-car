using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class AtualizarLocacaoContract : Contract<AtualizarLocacaoCommand>
    {
        public AtualizarLocacaoContract(AtualizarLocacaoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.ToString(), "Id", "Id é obrigatório");
            Requires().IsGreaterThan(command.Id, 0, "Id", "Id deve ser maior que 0.");
            Requires().IsNotNullOrEmpty(command.Descricao, "Descrição", "Descrição é obrigatório");
            Requires().IsNotNull(command.Status, "Status", "Status é obrigatório");
        }
    }
}
