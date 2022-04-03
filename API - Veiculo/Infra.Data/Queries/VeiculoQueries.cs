namespace Infra.Data.Queries
{
    public class VeiculoQueries
    {
        public const string LISTAR =
         @"SELECT u.*
            FROM  veiculo u";

        public const string OBTER =
         @"SELECT   Id,
                    Descricao
           FROM  veiculo
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO veiculo (Descricao)
                        VALUES (@Descricao);";

        public const string ATUALIZAR =
          @"UPDATE veiculo
                SET
                     Descricao = @Descricao,
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM veiculo
                WHERE Id = @Id;";
    }
}
