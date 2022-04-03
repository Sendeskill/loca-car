using API_Locacao.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class SalvarLocacaoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public string Descricao { get; set; }

        public bool EhValido()
        {
            AddNotifications(new SalvarLocacaoContract(this));
            return IsValid;
        }
    }
}