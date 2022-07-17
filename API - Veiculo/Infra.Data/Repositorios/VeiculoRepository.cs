using API_Veiculo.Data;
using Dapper;
using Dominio.Entidades;
using Dominio.Queries;
using Dominio.Repositorios;
using Infra.Data.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infra.Data.Repositorios
{
    public class VeiculoRepository : IVeiculoRepository
    {
        private readonly DataContext context;
        private readonly DynamicParameters param;

        public VeiculoRepository(DataContext context)
        {
            this.context = context;
            this.param = new DynamicParameters();
        }

        public async Task<IEnumerable<VeiculoQueryResult>> ListarAsync() =>
            await context.Connection.QueryAsync<VeiculoQueryResult>(VeiculoQueries.LISTAR);

        public async Task<VeiculoQueryResult> ObterAsync(int id) =>
            await context.Connection.QueryFirstOrDefaultAsync<VeiculoQueryResult>(Queries.VeiculoQueries.OBTER, new { id });

        public async Task SalvarAsync(Veiculo veiculo)
        {
            param.Add("@Descricao", veiculo.Descricao);
            param.Add("@Placa", veiculo.Placa);
            param.Add("@AnoFabricacao", veiculo.AnoFabricacao);
            param.Add("@AnoModelo", veiculo.AnoModelo);
            param.Add("@Modelo", veiculo.Modelo);
            param.Add("@Marca", veiculo.Marca);
            param.Add("@Cor", veiculo.Cor);
            param.Add("@Observacao", veiculo.Observacao);

            await context.Connection.ExecuteScalarAsync(VeiculoQueries.SALVAR, param);
        }

        public async Task AtualizarAsync(Veiculo veiculo)
        {
            param.Add("@Id", veiculo.Id);
            param.Add("@AnoFabricacao", veiculo.AnoFabricacao);
            param.Add("@AnoModelo", veiculo.AnoModelo);
            param.Add("@Modelo", veiculo.Modelo);
            param.Add("@Marca", veiculo.Marca);
            param.Add("@Cor", veiculo.Cor);
            param.Add("@Observacao", veiculo.Observacao);

            await context.Connection.ExecuteScalarAsync(VeiculoQueries.ATUALIZAR, param);
        }

        public async Task DeletarAsync(int id) =>
            await context.Connection.ExecuteAsync(VeiculoQueries.DELETAR, new { id });
    }
}
