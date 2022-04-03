using API_Usuario.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class SalvarUsuarioCommand : Notifiable<Notification>, ICommandPadrao
    {
        public string Nome { get; set; }

        public string Email { get; set; }

        public bool EhValido()
        {
            AddNotifications(new SalvarUsuarioContract(this));
            return IsValid;
        }
    }
}