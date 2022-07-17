CREATE TABLE Usuario
(
	Id Int primary key auto_increment,
	Tipo Int not null,
    Nome varchar(150) not null,
    Email varchar(150) not null,
    Senha varchar(500) not null,
    Cpf varchar(11)not null,
	Logradouro varchar(150) not null,
	Cidade varchar(100) not null
);