using API_Usuario.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class ApagarUsuarioCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }

        public bool EhValido()
        {
            AddNotifications(new ApagarUsuarioContract(this));
            return IsValid;
        }
    }
}
