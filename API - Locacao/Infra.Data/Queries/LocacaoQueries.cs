namespace Infra.Data.Queries
{
    public class LocacaoQueries
    {
        public const string LISTAR =
         @"SELECT u.*
            FROM  locacao u";

        public const string OBTER =
         @"SELECT   Id,
                    Descricao
           FROM  locacao
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO locacao (Descricao)
                        VALUES (@Descricao);";

        public const string ATUALIZAR =
          @"UPDATE locacao
                SET
                     Descricao = @Descricao
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM locacao
                WHERE Id = @Id;";
    }
}
