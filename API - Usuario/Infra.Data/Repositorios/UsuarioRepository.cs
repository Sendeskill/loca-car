﻿using API_Usuario.Data;
using Dapper;
using Dominio.Entidades;
using Dominio.Queries;
using Dominio.Repositorios;
using Infra.Data.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infra.Data.Repositorios
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly DataContext context;
        private readonly DynamicParameters param;

        public UsuarioRepository(DataContext context)
        {
            this.context = context;
            this.param = new DynamicParameters();
        }

        public async Task<IEnumerable<UsuarioQueryResult>> ListarAsync() =>
            await context.Connection.QueryAsync<UsuarioQueryResult>(UsuarioQueries.LISTAR);

        public async Task<UsuarioQueryResult> ObterAsync(int id) =>
            await context.Connection.QueryFirstOrDefaultAsync<UsuarioQueryResult>(Queries.UsuarioQueries.OBTER, new { id });

        public async Task SalvarAsync(Usuario usuario)
        {
            param.Add("@Nome", usuario.Nome);
            param.Add("@Email", usuario.Email);

            await context.Connection.ExecuteScalarAsync(UsuarioQueries.SALVAR, param);
        }

        public async Task AtualizarAsync(Usuario usuario)
        {
            param.Add("@Id", usuario.Id);
            param.Add("@Nome", usuario.Nome);
            param.Add("@Email", usuario.Email);

            await context.Connection.ExecuteScalarAsync(UsuarioQueries.ATUALIZAR, param);
        }

        public async Task DeletarAsync(int id) =>
            await context.Connection.ExecuteAsync(UsuarioQueries.DELETAR, new { id });
    }
}