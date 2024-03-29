﻿using Dominio.Commands.Input;
using Flunt.Validations;

namespace Dominio.Commands.Contrato
{
    public class AtualizarVeiculoContract : Contract<AtualizarVeiculoCommand>
    {
        public AtualizarVeiculoContract(AtualizarVeiculoCommand command)
        {
            Requires().IsNotNullOrEmpty(command.ToString(), "Id", "Id é obrigatório");
            Requires().IsGreaterThan(command.Id, 0, "Id", "Id deve ser maior que 0.");
        }
    }
}
