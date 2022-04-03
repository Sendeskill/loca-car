using API_Usuario.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class AtualizarUsuarioCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }

        public bool EhValido()
        {
            AddNotifications(new AtualizarUsuarioContract(this));
            return IsValid;
        }
    }
}
