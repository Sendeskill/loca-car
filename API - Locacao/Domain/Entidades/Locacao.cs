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

        public Locacao()
        {
        }

        public Locacao(string descricao, int usuarioId, int veiculoId, DateTime dataLocacao, DateTime dataDevolucao)
        {
            Descricao = descricao;
            UsuarioId = usuarioId;
            VeiculoId = veiculoId;
            DataLocacao = dataLocacao;
            DataDevolucao = dataDevolucao;
        }

        public Locacao(int id, string descricao, int usuarioId, int veiculoId, DateTime dataLocacao, DateTime dataDevolucao)
        {
            Id = id;
            Descricao = descricao;
            UsuarioId = usuarioId;
            VeiculoId = veiculoId;
            DataLocacao = dataLocacao;
            DataDevolucao = dataDevolucao;
        }
    }
}
