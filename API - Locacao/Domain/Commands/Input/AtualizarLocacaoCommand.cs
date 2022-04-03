using API_Locacao.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class AtualizarLocacaoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }
        public string Descricao { get; set; }

        public bool EhValido()
        {
            AddNotifications(new AtualizarLocacaoContract(this));
            return IsValid;
        }
    }
}
