using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace API_Veiculo.Middlewares
{
    public class ErrorMiddleware
    {
        /// <summary>
        /// The next
        /// </summary>
        private readonly RequestDelegate next;

        /// <summary>
        /// The logger
        /// </summary>
        private readonly ILogger<ErrorMiddleware> logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="ErrorMiddleware" /> class.
        /// </summary>
        /// <param name="next">
        /// The next.
        /// </param>
        /// <param name="logger">
        /// The logger.
        /// </param>
        public ErrorMiddleware(RequestDelegate next, ILogger<ErrorMiddleware> logger)
        {
            this.next = next;
            this.logger = logger;
        }

        public async Task InvokeAsync(HttpContext context /* other dependencies */)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
                logger.LogError(ex.Message);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            var code = System.Net.HttpStatusCode.InternalServerError; // 500 if unexpected

            var result = System.Text.Json.JsonSerializer.Serialize(ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }
}
