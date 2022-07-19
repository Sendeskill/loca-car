namespace Infra.Data.Queries
{
    public class VeiculoQueries
    {
        public const string LISTAR =
         @"SELECT v.*
            FROM  Veiculo v";

        public const string OBTER =
         @"SELECT   v.*
           FROM  Veiculo v
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO Veiculo (Descricao, Placa, AnoFabricacao, AnoModelo, 
                                  Modelo, Marca, Cor, Observacao, Status, Imagem)
                        VALUES (@Descricao, @Placa, @AnoFabricacao, @AnoModelo, 
                                @Modelo, @Marca, @Cor, @Observacao, @Status, @Imagem);";

        public const string ATUALIZAR =
          @"UPDATE Veiculo
                SET
                     Descricao     = @Descricao,
                     Placa         = @Placa,
                     AnoFabricacao = @AnoFabricacao,
                     AnoModelo     = @AnoModelo,
                     Modelo        = @Modelo,
                     Marca         = @Marca,
                     Cor           = @Cor,
                     Observacao    = @Observacao,
                     Status        = @Status,
                     Imagem        = @Imagem
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM Veiculo
                WHERE Id = @Id;";
    }
}
