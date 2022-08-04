using System;

namespace Dominio.Entidades
{
    public class Locacao
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public int UsuarioId { get; set; }
        public int VeiculoId { get; set; }
        public DateTime DataLocacao { get; set; }
        public DateTime DataDevolucao { get; set; }
        public int Status { get; set; }

        public Locacao()
        {
        }

        public Locacao(string descricao, int usuarioId, int veiculoId, DateTime dataLocacao, DateTime dataDevolucao, int status)
        {
            Descricao = descricao;
            UsuarioId = usuarioId;
            VeiculoId = veiculoId;
            DataLocacao = dataLocacao;
            DataDevolucao = dataDevolucao;
            Status = status;
        }

        public Locacao(int id, string descricao, int usuarioId, int veiculoId, DateTime dataLocacao, DateTime dataDevolucao, int status)
        {
            Id = id;
            Descricao = descricao;
            UsuarioId = usuarioId;
            VeiculoId = veiculoId;
            DataLocacao = dataLocacao;
            DataDevolucao = dataDevolucao;
            Status = status;
        }
    }
}
