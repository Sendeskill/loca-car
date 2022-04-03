using API_Veiculo.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class ApagarVeiculoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }

        public bool EhValido()
        {
            AddNotifications(new ApagarVeiculoContract(this));
            return IsValid;
        }
    }
}
