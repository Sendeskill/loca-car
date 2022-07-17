namespace Infra.Data.Queries
{
    public class UsuarioQueries
    {
        public const string LISTAR =
         @"SELECT u.*
            FROM  Usuario u";

        public const string OBTER =
         @"SELECT   Id,
                    Nome,
                    Email
           FROM  Usuario
           WHERE Id=@Id";

        public const string SALVAR =
           @"INSERT INTO Usuario (Nome, Email, Senha, Tipo, Cpf, Logradouro, Cidade)
                        VALUES (@Nome, @Email, @Senha, @Tipo, @Cpf, @Logradouro, @Cidade);";

        public const string ATUALIZAR =
          @"UPDATE usuario
                SET
                     Nome = @Nome,
                     Email = @Email,
                     Tipo = @Tipo,
                     Senha = @Senha,
                     Cpf = @Cpf,
                     Logradouro = @Logradouro,
                     Cidade = @Cidade
                WHERE Id = @Id;";

        public const string DELETAR =
            @"DELETE FROM Usuario
                WHERE Id = @Id;";

        public const string LOGAR =
            @"SELECT u.*
                FROM  Usuario u
                WHERE Email = @Email AND
                Senha = @Senha";
    }
}
