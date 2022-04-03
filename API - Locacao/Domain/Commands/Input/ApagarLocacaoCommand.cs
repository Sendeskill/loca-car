using API_Locacao.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class ApagarLocacaoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }

        public bool EhValido()
        {
            AddNotifications(new ApagarLocacaoContract(this));
            return IsValid;
        }
    }
}
