using API_Veiculo.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class SalvarVeiculoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public string Descricao { get; set; }

        public bool EhValido()
        {
            AddNotifications(new SalvarVeiculoContract(this));
            return IsValid;
        }
    }
}