CREATE DATABASE IF NOT EXISTS cine;

USE cine;

GRANT SELECT, UPDATE, INSERT, DELETE, EXECUTE ON *.* TO usuario IDENTIFIED BY 'clave';

CREATE TABLE pelicula (
  id_pelicula INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  director VARCHAR(30) NOT NULL, 
  fecha INT NOT NULL,
  idioma VARCHAR(15) NOT NULL,
  duracion INT NOT NULL
  PRIMARY KEY(id_pelicula)
);

DESCRIBE pelicula;

INSERT INTO pelicula values 
  (1, 'Titanic', 'James Cameron', 1997, 'English', 210),
  (2, 'Chuky', 'Tom Holland', 1988, 'English', 88),
  (3, 'The Dark Knight', 'Cristopher Nolan', 2008, 'English', 152);

SELECT * FROM pelicula;
