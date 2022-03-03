CREATE DATABASE webFaraday;

CREATE TABLE Invento (
    id INT IDENTITY(1,1),
    nombre VARCHAR(20),
    descr VARCHAR(60),
    longDesc VARCHAR(500),
    img VARCHAR(100),
    CONSTRAINT pk_idInvento PRIMARY KEY(id)
);

