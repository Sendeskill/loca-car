namespace Infra.Data.Queries
{
    public class UsuarioQueries
    {
        public const string LISTAR =
         @"SELECT u.*
            FROM  usuario u";

        public const string OBTER =
         @"SELECT   Id,
                    Nome,
                    Email
           FROM  usuario
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO usuario (Nome, Email)
                        VALUES (@Nome, @Email);";

        public const string ATUALIZAR =
          @"UPDATE usuario
                SET
                     Nome = @Nome,
                     Email = @Email
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM usuario
                WHERE Id = @Id;";
    }
}
