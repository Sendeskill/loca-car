using API_Veiculo.Comum;
using Dominio.Commands.Contrato;
using Flunt.Notifications;

namespace Dominio.Commands.Input
{
    public class AtualizarVeiculoCommand : Notifiable<Notification>, ICommandPadrao
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Placa { get; set; }
        public int AnoFabricacao { get; set; }
        public int AnoModelo { get; set; }
        public string Modelo { get; set; }
        public string Marca { get; set; }
        public string Cor { get; set; }
        public string Observacao { get; set; }

        public bool EhValido()
        {
            AddNotifications(new AtualizarVeiculoContract(this));
            return IsValid;
        }
    }
}
