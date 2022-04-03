﻿using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class SalvarUsuarioContract : Contract<SalvarUsuarioCommand>
    {
        public SalvarUsuarioContract(SalvarUsuarioCommand command)
        {
            Requires().IsNotNullOrEmpty(command.Nome, "Nome", "Nome é obrigatório");
            Requires().IsNotNullOrEmpty(command.Email, "Email", "Email é obrigatório");
        }
    }
}
