CREATE TABLE Puja (
    Id INT IDENTITY(1,1),
    idInvento INT,
    cantidad INT,
    CONSTRAINT pk_idPuja PRIMARY KEY(Id),
    CONSTRAINT fk_idInvento FOREIGN KEY(idInvento) REFERENCES Invento(Id)
);

