using MySql.Data.MySqlClient;
using System;

namespace API_Veiculo.Data
{
    public class DataContext : IDisposable
    {
        public MySqlConnection Connection { get; }

        public DataContext(string connection)
        {
            Connection = new MySqlConnection(connection);
            Connection.Open();
        }

        public void Dispose() => Connection.Dispose();
    }
}
