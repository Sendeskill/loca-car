using Dominio.Entidades;
using Dominio.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dominio.Repositorios
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<UsuarioQueryResult>> ListarAsync();

        Task<UsuarioQueryResult> ObterAsync(int id);

        Task<UsuarioQueryResult> LogarAsync(string email, string senha);

        Task SalvarAsync(Usuario usuario);

        Task AtualizarAsync(Usuario usuario);

        Task DeletarAsync(int id);
    }
}
