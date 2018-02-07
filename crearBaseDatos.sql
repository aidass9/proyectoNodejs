CREATE DATABASE IF NOT EXISTS proyectonodejs;

USE proyectonodejs;

CREATE TABLE IF NOT EXISTS Carreras(
	idCarrera int NOT NULL AUTO_INCREMENT,
	numCarrera int NOT NULL,
	descripcionCarrera varchar(200) NOT NULL,
	fechaCarrera date NOT NULL,
	distanciaEnMetro int NOT NULL,
	horaIncio varchar(8) NOT NULL,
	PRIMARY KEY(idCarrera),
    KEY(numCarrera)
);

CREATE TABLE IF NOT EXISTS Participantes(
    idParticipante int NOT NULL AUTO_INCREMENT,
    numCarrera int NOT NULL,
    dorsal int NOT NULL,
    nombre varchar(50) NOT NULL,
    apellidos varchar(50) NULL,
    posicionGenaral int NOT NULL,
    DNI varchar(50) NOT NULL,
    tiempoOficial varchar(50) NOT NULL,
    PRIMARY KEY(idParticipante),
    CONSTRAINT `fk_ParticipantesCarreras` FOREIGN KEY (`idParticipante`) REFERENCES `carreras` (`numCarrera`),
    KEY(dorsal)
);

CREATE TABLE IF NOT EXISTS CodigoChips(
    codigo INT NOT NULL AUTO_INCREMENT,
    dorsal INT NOT NULL,
    PRIMARY KEY(codigo),
    CONSTRAINT `fk_ChipParticipante` FOREIGN KEY (`dorsal`) REFERENCES `Participantes` (`dorsal`)
);