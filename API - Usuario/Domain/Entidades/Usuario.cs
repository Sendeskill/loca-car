namespace Dominio.Entidades
{
    public class Usuario
    {
        public int Id { get; set; }
        public int Tipo { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Cpf { get; set; }
        public string Logradouro { get; set; }
        public string Cidade { get; set; }


        public Usuario()
        {
        }

        public Usuario(string nome, int tipo, string email, string senha, string cpf, string logradouro, string cidade)
        {
            Tipo = tipo;
            Nome = nome;
            Email = email;
            Senha = senha;
            Cpf = cpf;
            Logradouro = logradouro;
            Cidade = cidade;
        }

        public Usuario(int id, int tipo, string nome, string email, string senha, string cpf, string logradouro, string cidade)
        {
            Id = id;
            Tipo = tipo;
            Nome = nome;
            Email = email;
            Senha = senha;
            Cpf = cpf;
            Logradouro = logradouro;
            Cidade = cidade;
        }
    }
}
