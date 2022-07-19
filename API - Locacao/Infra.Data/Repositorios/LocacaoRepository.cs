using API_Locacao.Data;
using Dapper;
using Dominio.Entidades;
using Dominio.Queries;
using Dominio.Repositorios;
using Infra.Data.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infra.Data.Repositorios
{
    public class LocacaoRepository : ILocacaoRepository
    {
        private readonly DataContext context;
        private readonly DynamicParameters param;

        public LocacaoRepository(DataContext context)
        {
            this.context = context;
            this.param = new DynamicParameters();
        }

        public async Task<IEnumerable<LocacaoQueryResult>> ListarAsync() =>
            await context.Connection.QueryAsync<LocacaoQueryResult>(LocacaoQueries.LISTAR);

        public async Task<LocacaoQueryResult> ObterAsync(int id) =>
            await context.Connection.QueryFirstOrDefaultAsync<LocacaoQueryResult>(Queries.LocacaoQueries.OBTER, new { id });

        public async Task SalvarAsync(Locacao locacao)
        {
            param.Add("@Descricao", locacao.Descricao);
            param.Add("@UsuarioId", locacao.UsuarioId);
            param.Add("@VeiculoId", locacao.VeiculoId);
            param.Add("@DataLocacao", locacao.DataLocacao);
            param.Add("@DataDevolucao", locacao.DataDevolucao);

            await context.Connection.ExecuteScalarAsync(LocacaoQueries.SALVAR, param);
        }

        public async Task AtualizarAsync(Locacao locacao)
        {
            param.Add("@Id", locacao.Id);
            param.Add("@Descricao", locacao.Descricao);

            await context.Connection.ExecuteScalarAsync(LocacaoQueries.ATUALIZAR, param);
        }

        public async Task DeletarAsync(int id) =>
            await context.Connection.ExecuteAsync(LocacaoQueries.DELETAR, new { id });
    }
}
