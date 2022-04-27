USE [AcessoEstrelaMorte]
GO

CREATE TABLE [Naves](
	Id int NOT NULL Primary Key,
	Nome varchar(100) NOT NULL,
	Modelo varchar(150) NOT NULL,
	Passageiros int NOT NULL,
	Carga float NOT NULL,
	Classe varchar(100) NOT NULL
)
GO