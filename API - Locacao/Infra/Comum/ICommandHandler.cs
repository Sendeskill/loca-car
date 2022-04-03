using System.Threading.Tasks;

namespace API_Locacao.Comum
{
    public interface ICommandHandler<T> where T : ICommandPadrao
    {
        Task<ICommandResult> HandleAsync(T command);
    }
}
