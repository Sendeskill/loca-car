namespace Dominio.Entidades
{
    public class Veiculo
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
        public int Status { get; set; }
        public string Imagem { get; set; }

        public Veiculo()
        {
        }

        public Veiculo(string descricao, string placa, int anoFabricacao, int anoModelo, string modelo, string marca, string cor, string observacao, int status, string imagem)
        {
            Descricao = descricao;
            Placa = placa;
            AnoFabricacao = anoFabricacao;
            AnoModelo = anoModelo;
            Modelo = modelo;
            Marca = marca;
            Cor = cor;
            Observacao = observacao;
            Status = status;
            Imagem = imagem;
        }

        public Veiculo(int id, string descricao, string placa, int anoFabricacao, int anoModelo, string modelo, string marca, string cor, string observacao, int status, string imagem)
        {
            Id = id;
            Descricao = descricao;
            Placa = placa;
            AnoFabricacao = anoFabricacao;
            AnoModelo = anoModelo;
            Modelo = modelo;
            Marca = marca;
            Cor = cor;
            Observacao = observacao;
            Status = status;
            Imagem = imagem;
        }
    }
}
