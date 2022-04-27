USE [AcessoEstrelaMorte]
GO

CREATE TABLE [Planetas](
	Id int NOT NULL Primary key,
	Nome varchar(50) NOT NULL,
	Rotacao varchar(50) NOT NULL,
	Orbita float NOT NULL,
	Diametro float NOT NULL,
	Clima varchar(50) NOT NULL,
	Populacao int NOT NULL
)
GO