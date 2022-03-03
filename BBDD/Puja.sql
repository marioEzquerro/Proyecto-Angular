CREATE TABLE Puja (
    id INT IDENTITY(1,1),
    idInvento INT,
    cantidad INT,
    CONSTRAINT pk_idPuja PRIMARY KEY(id),
    CONSTRAINT pk_idInvemto FOREIGN KEY(idInvento) REFERENCES Invento(Id)
);

