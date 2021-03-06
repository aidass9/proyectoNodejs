CREATE TABLE IF NOT EXISTS Carreras(
 idCarrera INT NOT NULL AUTO_INCREMENT,
 numCarrera INT NOT NULL,
 descripcionCarrera VARCHAR(200) NOT NULL,
 fechaCarrera DATE NOT NULL,
 distanciaEnMetro INT NOT NULL,
 horaIncio VARCHAR(8) NOT NULL,
 PRIMARY KEY (idCarrera),
 KEY (numCarrera)
);

CREATE TABLE IF NOT EXISTS Participantes(
 idParticipante int NOT NULL AUTO_INCREMENT,
 numCarrera int NOT NULL,
 dorsal INT NOT NULL UNIQUE,
 nombre VARCHAR(50) NOT NULL,
 apellidos varchar(50) NOT NULL,
 posicionGeneral int NOT NULL,
 DNI varchar(50) NOT NULL,
 tiempoOficial varchar(50),
 PRIMARY KEY(idParticipante),
 CONSTRAINT `FK_participantes_carreras` FOREIGN KEY (`numCarrera`) REFERENCES `carreras` (`numCarrera`),
 KEY (dorsal)
);

CREATE TABLE IF NOT EXISTS CodigoChips(
 codigo VARCHAR(16) NOT NULL,
 dorsal INT NOT NULL,
 PRIMARY KEY(codigo),
 CONSTRAINT `FK_chipParticipante` FOREIGN KEY (`dorsal`) REFERENCES `participantes` (`dorsal`) ON DELETE CASCADE
);
