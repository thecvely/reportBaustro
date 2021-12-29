CREATE DATABASE BAUSTRO;

CREATE TABLE Procesadores(
Codigo varchar(20) not null,
IP varchar(15),
Hostname varchar(10) not null,
Usuario varchar(10) not null,
MAC varchar(17) not null,
P_Model varchar(25) not null,
P_Marca varchar(25) not null,
M_Serial varchar(20),
M_Model varchar(25) not null,
M_Marca varchar(25) not null,
Systema varchar(25) not null,
OS_Arch varchar(7) not null,
OS_Version varchar(4) not null,
Puerto varchar(10),
Oficina varchar(10) not null,
Estado varchar(10) not null,
PRIMARY KEY (Codigo)
);

CREATE TABLE Discos(
Serial varchar(50) not null,
Modelo varchar(50) not null,
Capacidad int not null,
Procesador varchar (20) not null,
Estado varchar(10) not null,
CONSTRAINT id_cpud FOREIGN KEY (Procesador) REFERENCES  Procesadores(Codigo)
);

CREATE TABLE Memorias(
Serial varchar(50) not null,
Tipo varchar(5) not null,
Capacidad varchar(5) not null,
Marca varchar(20) not null,
Velocidad varchar(5) not null,
Procesador varchar(20) not null,
Estado varchar(10) not null,
CONSTRAINT id_cpum FOREIGN KEY (Procesador) REFERENCES Procesadores(Codigo)
);

CREATE TABLE Mouses (
Codigo varchar(20),
Serial varchar(25),
Marca varchar(25) not null,
Modelo varchar(25),
Estado varchar(10) not null,
Procesador varchar(20) not null,
CONSTRAINT id_cpur FOREIGN KEY (Procesador) REFERENCES Procesadores(Codigo)
);

CREATE TABLE Teclados (
Codigo varchar(20),
Serial varchar(25),
Marca varchar(25) not null,
Modelo varchar(25),
Estado varchar(10) not null,
Procesador varchar(20) not null,
CONSTRAINT id_cpu FOREIGN KEY (Procesador) REFERENCES Procesadores(Codigo)
);

CREATE TABLE Monitores (
Codigo varchar(20),
Serial varchar(25) not null,
Marca varchar(25) not null,
Modelo varchar(25) not null,
Estado varchar(10) not null,
Procesador varchar(20) not null,
CONSTRAINT id_cpu_moni FOREIGN KEY (Procesador) REFERENCES Procesadores(Codigo)
);

CREATE TABLE Telefonos (
    Codigo varchar(20) ,
    Serial varchar(25) not null,
    Marca varchar(25) not null,
    Modelo varchar(25) not null,
    MAC varchar(17) not null,
    IP varchar(15) not null,
    Estado varchar(10) not null,
    Procesador varchar(20) not null,
    CONSTRAINT id_cpuph FOREIGN KEY (Procesador) REFERENCES Procesadores(Codigo)
);

CREATE TABLE Licencias(
    Valor varchar(50) not null,
    Programa varchar(25) not null,
    Tipo varchar(10),
    Respaldo longblob,
    Fecha timestamp,
    Estado varchar(10) not null,
    Procesador varchar(20),
    CONSTRAINT id_cpul FOREIGN KEY (Procesador) REFERENCES Procesadores(Codigo)
);