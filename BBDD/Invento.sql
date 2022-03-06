
CREATE TABLE Invento (
    Id INT IDENTITY(1,1),
    nombre VARCHAR(25),
    descr VARCHAR(60),
    longDesc VARCHAR(500),
    img VARCHAR(100),
    CONSTRAINT pk_idInvento PRIMARY KEY(Id)
);

