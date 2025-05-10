-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS registro_usuarios;

-- Usar la base de datos
USE registro_usuarios;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(150) NOT NULL,
    edad INT NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Opcional: Insertar algunos datos de ejemplo
INSERT INTO usuarios (nombre, apellidos, edad, telefono)
VALUES
('Juan', 'Pérez García', 28, '555-123-4567'),
('María', 'López Rodríguez', 34, '555-987-6543');
