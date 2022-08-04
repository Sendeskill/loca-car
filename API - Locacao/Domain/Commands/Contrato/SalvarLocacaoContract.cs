using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class SalvarLocacaoContract : Contract<SalvarLocacaoCommand>
    {
        public SalvarLocacaoContract(SalvarLocacaoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Descricao, "Descrição", "Descrição é obrigatório");
            Requires().IsNotNull(command.UsuarioId, "UsuarioId", "Usuario Id é obrigatório");
            Requires().IsNotNull(command.VeiculoId, "VeiculoId", "VeiculoId é obrigatório");
            Requires().IsNotNull(command.DataLocacao, "Data Locação", "Data Locação é obrigatório");
            Requires().IsNotNull(command.DataDevolucao, "Data Devolução", "Data Devolução é obrigatório");
            Requires().IsNotNull(command.Status, "Status", "Status é obrigatório");
        }
    }
}
