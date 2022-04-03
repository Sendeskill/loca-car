using Dominio.Entidades;
using Dominio.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dominio.Repositorios
{
    public interface ILocacaoRepository
    {
        Task<IEnumerable<LocacaoQueryResult>> ListarAsync();

        Task<LocacaoQueryResult> ObterAsync(int id);

        Task SalvarAsync(Locacao locacao);

        Task AtualizarAsync(Locacao locacao);

        Task DeletarAsync(int id);
    }
}
