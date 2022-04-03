using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class SalvarLocacaoContract : Contract<SalvarLocacaoCommand>
    {
        public SalvarLocacaoContract(SalvarLocacaoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Descricao, "Descrição", "Descrição é obrigatório");
        }
    }
}
