using API_Locacao.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;
using System;

namespace Dominio.Commands.Input
{
    public class SalvarLocacaoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public string Descricao { get; set; }
        public int UsuarioId { get; set; }
        public int VeiculoId { get; set; }
        public DateTime DataLocacao { get; set; }
        public DateTime DataDevolucao { get; set; }
        public int Status { get; set; }
        public bool EhValido()
        {
            AddNotifications(new SalvarLocacaoContract(this));
            return IsValid;
        }
    }
}