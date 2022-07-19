CREATE TABLE Veiculo
(
	Id Int primary key auto_increment,
	Descricao varchar(200) not null,
	Placa varchar(7) not null,
    AnoFabricacao int not null,
    AnoModelo int not null,
    Modelo varchar(150) not null,
    Marca varchar(150) not null,
    Cor varchar(100) not null,
    Observacao varchar(250) not null,
    Status int not null,
    Imagem text
);