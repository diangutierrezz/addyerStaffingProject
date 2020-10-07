
CREATE DATABASE Proyecto
USE Proyecto



--------------------------TABLAS PRINCIPALES---------------------------
DROP TABLE IF exists usuario

CREATE TABLE usuario(
id NUMERIC IDENTITY(1,1)  PRIMARY KEY,
rol VARCHAR(50) not null,
nombre VARCHAR(50) not null,
apellido VARCHAR(50)not null,
rut VARCHAR(15) UNIQUE not null,
correo VARCHAR(150) UNIQUE not null,
contrasena VARCHAR(80)not null,
cargo VARCHAR(80)not null
);



USE Proyecto
----------------------INGRESO DIRECTO DE DATOS USUARIO-------------------
INSERT INTO usuario (rol, nombre, apellido, rut, correo, contrasena, cargo) VALUES ('Colaborador', 'Annerys', 'Villamizar', '12.345.670-9', 'annerys139@gmail.com', 'anne4321','Ayudante');
INSERT INTO usuario (rol, nombre, apellido, rut, correo, contrasena, cargo) VALUES ('Colaborador', 'Diana', 'Romero', '25.878.291-7', 'valenromero1003@gmail.com', 'dia4321.','Tutor');
INSERT INTO usuario (rol, nombre, apellido, rut, correo, contrasena, cargo) VALUES ('Colaborador', 'Diandra', 'Palacios', '25.151.714-5', 'diandrapalaciosgutierrez@gmail.com', 'dian4321.','Profesor Programaci�n');
INSERT INTO usuario (rol, nombre, apellido, rut, correo, contrasena, cargo) VALUES ('Colaborador', 'Rodrigo', 'Garay', '21.887.230-6', 'rodrigogaraymartinez@gmail.com', 'rod4321.','Facilitador');
INSERT INTO usuario (rol, nombre, apellido, rut, correo, contrasena, cargo) VALUES ('Administrador', 'Evelyn', 'P�rez', '25.353.117-K', 'pf.evelyn.l@gmail.com', 'eve4321.','Coordinador');

SELECT * FROM usuario

-----------------------------------------------------------------------------------


DROP TABLE IF exists proyecto
CREATE TABLE proyecto(
id NUMERIC IDENTITY(1,1) PRIMARY KEY,
nombreproyecto VARCHAR(80) UNIQUE not null,
descripcion VARCHAR(2000)not null,
fechainicio VARCHAR(50)not null,
fechafinal VARCHAR(50)not null,
);

USE Proyecto
----------------------INGRESO DIRECTO DE DATOS PROYECTO-------------------
INSERT INTO proyecto (nombreproyecto, descripcion, fechainicio, fechafinal) VALUES ('Programa tu futuro', 'Programa Tu Futuro es un programa desarrollado con el apoyo de la Universidad de Chile para otorgar capacitaci�n t�cnica como Desarrollador de programas y aplicaciones empresariales.', '03-10-2020', '01-02-2021')
INSERT INTO proyecto (nombreproyecto, descripcion, fechainicio, fechafinal) VALUES ('Empieza tu futuro', 'Entrenar con talleres de comunicaci�n oral, entrevistas simuladas, dise�o de CV, uso de plataformas digitales. Profundiza conocimientos t�cnicos de distintas actividades como atenci�n al cliente, ventas, salud, administraci�n, log�stica, gastronom�a o programaci�n web entre otras.', '03-02-2021', '04-06-2021')
INSERT INTO proyecto (nombreproyecto, descripcion, fechainicio, fechafinal) VALUES ('Conoce tu potencial', 'Desarrollar la confianza y autoestima, aprende a tomar buenas decisiones y a cumplir objetivos concretos. Para adaptarte e insertarte con �xito a un mundo que cambia cada d�a m�s r�pido.', '10-03-2021', '08-06-2021')
INSERT INTO proyecto (nombreproyecto, descripcion, fechainicio, fechafinal) VALUES ('Programa tu oportunidad', 'Entr�nate para superar el desaf�o de trabajar, estudiar y empezar tu propio camino. Realizamos en conjunto con Accenture un informe sobre las habilidades que deber�n desarrollar los j�venes para poder insertarse y tener un buen desempe�o en un nuevo sistema productivo fuertemente digitalizado.', '03-06-2021', '01-10-2021')
INSERT INTO proyecto (nombreproyecto, descripcion, fechainicio, fechafinal) VALUES ('Inserci�n al nuevo mundo', 'Ofrecer la posibilidad de insertar laboralmente a j�venes estudiantes en un �rea de gran demanda de profesionales y con grandes posibilidades de proyecci�n laboral. Se capacita a 60 estudiantes en dos lenguajes de programaci�n: .Net o Java. Al t�rmino del programa, los 20 mejores promedios, seran insertados dentro de Accenture y el resto de estudiantes, Accenture y Fundaci�n Forge, trabajar�n para ofrecerles oportunidades laborales.', '03-07-2021', '06-11-2021')

SELECT * FROM proyecto

----------------------------------------------------------------------------------------
USE PROYECTO
DROP TABLE IF exists habilidades
CREATE TABLE habilidades(
id NUMERIC IDENTITY(1,1) PRIMARY KEY,
habilidad VARCHAR(80)not null
);

SELECT * FROM habilidades

----------------------INGRESO DIRECTO DE DATOS HABILIDADES-------------------
INSERT INTO  habilidades ( habilidad)  VALUES 
-----------------HABILIDADES BLANDAS---------------
('Asertividad'), 
('Autodominio y Capacidad de articulaci�n') ,
('Adaptaci�n a los cambios') ,
('Autoconocimiento') ,
('Autoevaluaci�n') ,
('Autoestima'),
('Comunicaci�n') ,
('�tica para Trabajo'), 
('Estrategias para la Planificaci�n') ,
('Herramientas para la Inserci�n Laboral'),
('Manejo de la Frustraci�n'), 
('Orientaci�n'),
('Orientaci�n al servicio'),
('Psicolog�a'),
('Resilencia') ,
('Resoluci�n de problemas') ,
('Responsabilidad'),
('Trabajo en Equipo'),
-----------------HABILIDADES T�CNICAS---------------
('Administraci�n Base de datos'),
('Buenas Practicas de programaci�n'),
('Desarrollo web'),
('Manejo de Frameworks'),
('Programaci�n modular.') ,
('Programaci�n orientada a objetos'),
('Programaci�n concurrente.'),
('Programaci�n funcional.') ,
('Programaci�n l�gica.'),
('Pedagog�a') ,
('Programaci�n estructurada')

----------------------------------------TABLAS INTERMEDIAS--------------------------------------------------
USE Proyecto
DROP TABLE IF exists usuarioproyecto
CREATE TABLE usuarioproyecto(
id NUMERIC IDENTITY(1,1) PRIMARY KEY,
id_usuario NUMERIC not null,
id_proyecto NUMERIC not null,
CONSTRAINT fk_union_usuario
FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE,
CONSTRAINT fk_union_proyecto
FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

SELECT * FROM usuarioproyecto

----------------------INGRESO DIRECTO DE USUARIOS EN PROYECTOS-------------------
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (1,2)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (1,1)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (2,2)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (2,4)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (3,4)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (4,3)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (3,3)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (4,5)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (5,3)
INSERT INTO usuarioproyecto (id_usuario, id_proyecto) VALUES (5,5)

-----------------------------------------------------------------------------------------------
USE Proyecto
DROP TABLE IF exists usuariohabilidades
CREATE TABLE usuariohabilidades(
id NUMERIC IDENTITY(1,1) PRIMARY KEY,
id_usuario NUMERIC not null,
id_habilidades NUMERIC not null,
CONSTRAINT fk_union_usuaro1
FOREIGN KEY (id_usuario) REFERENCES usuario(id) ON DELETE CASCADE,
CONSTRAINT fk_union_habilidades
FOREIGN KEY (id_habilidades) REFERENCES habilidades(id)
);


SELECT * FROM usuariohabilidades
----------------------INGRESO DIRECTO DE HABILIDADES DE USUARIO-------------------
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (1,5)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (1,23)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (1,18)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (2,29)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (2,13)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (2,8)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (3,23)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (3,13)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (3,3)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (4,3)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (4,20)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (4,16)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (5,10)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (5,4)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (5,2)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (5,15)
INSERT INTO usuariohabilidades (id_usuario,id_habilidades) VALUES (5,12)
----------------------------------------------------------

USE Proyecto
DROP TABLE IF exists proyectohabilidades
CREATE TABLE proyectohabilidades(
id NUMERIC IDENTITY(1,1) PRIMARY KEY,
id_proyecto NUMERIC not null,
id_habilidades NUMERIC not null,
CONSTRAINT fk_union_project
FOREIGN KEY (id_proyecto) REFERENCES proyecto(id),
CONSTRAINT fk_union_habilidade
FOREIGN KEY (id_habilidades) REFERENCES habilidades(id)
);

SELECT * FROM proyectohabilidades
----------------------INGRESO DIRECTO DE HABILIDADES DE PROYECTOS-------------------
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (1,24)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (1,10)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (1,5)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (2,10)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (2,4)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (2,16)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (3,16)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (3,12)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (3,28)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (4,24)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (4,1)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (4,4)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (5,15)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (5,3)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (5,8)
INSERT INTO proyectohabilidades (id_proyecto,id_habilidades) VALUES (5,22)

