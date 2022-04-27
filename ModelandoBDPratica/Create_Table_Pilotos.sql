USE [AcessoEstrelaMorte]
GO 

CREATE TABLE [Pilotos](
	Id int NOT NULL Primary Key,
	Nome varchar(200) NOT NULL,
	AnoNacimento varchar(10) NOT NULL,
	IdPlaneta int NOT NULL,
	CONSTRAINT FK_Pilos_Planetas FOREIGN KEY (IdPlaneta)
        REFERENCES [AcessoEstrelaMorte].[dbo].[Planetas] (Id)
        ON DELETE CASCADE ON UPDATE CASCADE
)
GO