using API_Veiculo.Data;
using Dominio.Handlers;
using Dominio.Repositorios;
using Infra.Data.Repositorios;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API_Veiculo.Extensions
{
    public static class ServiceExtensions
    {
        #region Services

        /// <summary>
        /// The register service.
        /// </summary>
        /// <param name="services"></param>
        public static void AddContexts(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<DataContext, DataContext>(provider => new DataContext(configuration["ConnectionString:Connection"]));
        }

        /// <summary>
        /// The register service.
        /// </summary>
        /// <param name="services"></param>
        public static void AddHandlers(this IServiceCollection services)
        {
            services.AddTransient<VeiculoHandler, VeiculoHandler>();

        }

        /// <summary>
        /// The register service.
        /// </summary>
        /// <param name="services"></param>
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IVeiculoRepository, VeiculoRepository>();
        }

        #endregion
    }
}
