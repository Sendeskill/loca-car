CREATE TABLE Locacao
(
	Id int primary key auto_increment,
    UsuarioId int not null, 
    VeiculoId int not null,
    Descricao text not null,
    DataLocacao datetime not null,
    DataDevolucao datetime not null,
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(Id),
    FOREIGN KEY (VeiculoId) REFERENCES Veiculo(Id)
)