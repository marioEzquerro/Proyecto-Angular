CREATE DATABASE webFaraday;

CREATE TABLE Invento (
    id INT IDENTITY(1,1),
    nombre VARCHAR(20),
    descr VARCHAR(60),
    longDesc VARCHAR(500),
    img VARCHAR(100),DbContext
    CONSTRAINT pk_id PRIMARY KEY(id)
);

CREATE TABLE Puja (
    id INT IDENTITY(1,1),
    idInvento INT,
    cantidad INT,
    CONSTRAINT pk_idPuja PRIMARY KEY(id),
    CONSTRAINT pk_idInvemto FOREIGN KEY(idInvento) REFERENCES Invento(Id)
);

