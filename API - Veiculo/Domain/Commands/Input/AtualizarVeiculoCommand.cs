using API_Veiculo.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class AtualizarVeiculoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }
        public string Descricao { get; set; }

        public bool EhValido()
        {
            AddNotifications(new AtualizarVeiculoContract(this));
            return IsValid;
        }
    }
}
