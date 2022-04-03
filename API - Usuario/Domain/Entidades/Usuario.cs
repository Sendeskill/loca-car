namespace Dominio.Entidades
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }

        public Usuario()
        {
        }

        public Usuario(string nome, string email)
        {
            Nome = nome;
            Email = email;
        }

        public Usuario(int id, string nome, string email)
        {
            Id = id;
            Nome = nome;
            Email = email;
        }
    }
}
