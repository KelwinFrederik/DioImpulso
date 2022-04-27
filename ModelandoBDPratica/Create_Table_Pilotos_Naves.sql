USE [AcessoEstrelaMorte]
GO

CREATE TABLE Pilotos_Naves(
	IdPiloto int NOT NULL,
	IdNave int NOT NULL,
	Autorizado bit NOT NULL DEFAULT (1),
	CONSTRAINT PK_PilotosNaves PRIMARY KEY (IdPiloto, IdNave),	
	CONSTRAINT FK_PN_Pilotos FOREIGN KEY (IdPiloto)
		REFERENCES [AcessoEstrelaMorte].[dbo].[Pilotos] (Id)
			ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT FK_PN_Naves FOREIGN KEY (IdNave)
		REFERENCES [AcessoEstrelaMorte].[dbo].[Naves] (Id)
			ON DELETE CASCADE ON UPDATE CASCADE,
)
GO