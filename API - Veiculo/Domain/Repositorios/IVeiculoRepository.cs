using Dominio.Entidades;
using Dominio.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dominio.Repositorios
{
    public interface IVeiculoRepository
    {
        Task<IEnumerable<VeiculoQueryResult>> ListarAsync();

        Task<VeiculoQueryResult> ObterAsync(int id);

        Task SalvarAsync(Veiculo veiculo);

        Task AtualizarAsync(Veiculo veiculo);

        Task DeletarAsync(int id);
    }
}
