using API_Usuario.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class LogarUsuarioCommand : Notifiable<Notification>, ICommandPadrao
    {
        public string Email { get; set; }
        public string Senha { get; set; }

        public bool EhValido()
        {
            AddNotifications(new LogarUsuarioCommandContract(this));
            return IsValid;
        }
    }
}