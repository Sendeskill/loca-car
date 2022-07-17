using API_Usuario.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class SalvarUsuarioCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Tipo { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Cpf { get; set; }
        public string Logradouro { get; set; }
        public string Cidade { get; set; }

        public bool EhValido()
        {
            AddNotifications(new SalvarUsuarioContract(this));
            return IsValid;
        }
    }
}