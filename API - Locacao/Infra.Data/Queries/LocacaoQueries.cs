namespace Infra.Data.Queries
{
    public class LocacaoQueries
    {
        public const string LISTAR =
         @"SELECT l.*
            FROM  Locacao l";

        public const string OBTER =
         @"SELECT   l.*
           FROM  locacao l
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO locacao (Descricao, UsuarioId, VeiculoId, DataLocacao, DataDevolucao)
                    VALUES (@Descricao, @UsuarioId, @VeiculoId, @DataLocacao, @DataDevolucao);";

        public const string ATUALIZAR =
          @"UPDATE Locacao
                SET
                     Descricao     = @Descricao,
                     UsuarioId     = @UsuarioId,
                     VeiculoId     = @VeiculoId,
                     DataLocacao   = @DataLocacao,
                     DataDevolucao = @DataDevolucao
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM Locacao
                WHERE Id = @Id;";
    }
}
