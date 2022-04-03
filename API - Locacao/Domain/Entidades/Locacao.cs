namespace Dominio.Entidades
{
    public class Locacao
    {
        public int Id { get; set; }
        public string Descricao { get; set; }

        public Locacao()
        {
        }

        public Locacao(string descricao)
        {
            Descricao = descricao;
        }

        public Locacao(int id, string descricao)
        {
            Id = id;
            Descricao = descricao;
        }
    }
}
