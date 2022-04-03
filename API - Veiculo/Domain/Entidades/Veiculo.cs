namespace Dominio.Entidades
{
    public class Veiculo
    {
        public int Id { get; set; }
        public string Descricao { get; set; }

        public Veiculo()
        {
        }

        public Veiculo(string descricao)
        {
            Descricao = descricao;
        }

        public Veiculo(int id, string descricao)
        {
            Id = id;
            Descricao = descricao;
        }
    }
}
