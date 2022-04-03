using API_Usuario.Data;
using Dominio.Handlers;
using Dominio.Repositorios;
using Infra.Data.Repositorios;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API_Usuario.Extensions
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
            services.AddTransient<UsuarioHandler, UsuarioHandler>();

        }

        /// <summary>
        /// The register service.
        /// </summary>
        /// <param name="services"></param>
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IUsuarioRepository, UsuarioRepository>();
        }

        #endregion
    }
}
