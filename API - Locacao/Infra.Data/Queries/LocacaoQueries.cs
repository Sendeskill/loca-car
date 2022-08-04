namespace Infra.Data.Queries
{
    public class LocacaoQueries
    {
        public const string LISTAR =
         @"SELECT l.*
            FROM  Locacao l";

        public const string OBTER =
         @"SELECT   l.*
           FROM  Locacao l
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO Locacao (Descricao, UsuarioId, VeiculoId, DataLocacao, DataDevolucao, Status)
                    VALUES (@Descricao, @UsuarioId, @VeiculoId, @DataLocacao, @DataDevolucao, @Status);";

        public const string ATUALIZAR =
          @"UPDATE Locacao
                SET
                     Descricao     = @Descricao,
                     UsuarioId     = @UsuarioId,
                     VeiculoId     = @VeiculoId,
                     DataLocacao   = @DataLocacao,
                     DataDevolucao = @DataDevolucao,
                     Status = @Status
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM Locacao
                WHERE Id = @Id;";
    }
}
