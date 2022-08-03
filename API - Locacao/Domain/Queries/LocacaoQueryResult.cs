using System;

namespace Dominio.Queries
{
    public class LocacaoQueryResult
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public int VeiculoId { get; set; }
        public string Descricao { get; set; }
        public DateTime DataLocacao { get; set; }
        public DateTime DataDevolucao { get; set; }
        public int Status { get; set; }
    }
}
