USE cine;

DELIMITER $$
CREATE PROCEDURE addMovie(
  IN _nombre VARCHAR(50),
  IN _director VARCHAR(30),
  IN _fecha INT,
  IN _idioma VARCHAR(15),
  IN _duracion INT
)
BEGIN
  INSERT INTO pelicula(nombre, director, fecha, idioma, duracion)
  VALUES(_nombre, _director, _fecha, _idioma, _duracion);
END;

CREATE PROCEDURE updateMovie(
  IN _id_pelicula INT,
  IN _nombre VARCHAR(50),
  IN _director VARCHAR(30),
  IN _fecha INT,
  IN _idioma VARCHAR(15),
  IN _duracion INT
)
BEGIN
  UPDATE pelicula
  SET
  nombre = _nombre,
  director = _director,
  fecha = _fecha,
  idioma = _idioma,
  duracion = _duracion
  WHERE id_pelicula = _id_pelicula;
END;