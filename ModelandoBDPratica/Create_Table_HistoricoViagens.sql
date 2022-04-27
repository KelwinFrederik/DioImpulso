USE [AcessoEstrelaMorte]
GO

CREATE TABLE HistoricoViagens(
	IdNave int NOT NULL,
	IdPiloto int NOT NULL,
	SaidaDataHora datetime NOT NULL,
	ChegadaDataHora datetime NOT NULL,
	CONSTRAINT FK_HV_PN FOREIGN KEY (IdNave, IdPiloto)
	REFERENCES [AcessoEstrelaMorte].[dbo].[Pilotos_Naves] (IdPiloto,IdNave)
)
GO