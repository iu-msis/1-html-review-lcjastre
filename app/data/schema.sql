CREATE DATABASE IF NOT EXISTS lcjastreDB;
USE lcjastreDB;

DROP TABLE IF EXISTS Books;
CREATE TABLE Books (
	ID int primary key AUTO_INCREMENT,
	Title varchar(100) not null,
    Author varchar(100)  NOT NULL,
    Year_Published int not null,
    Publisher varchar(100) not null,
    Page_Count int not null,
    MSRP float not null
    
);

INSERT INTO Books (ID,Title, Author, Year_Published,Publisher,Page_Count, MSRP ) VALUES 
(1,'Harry Potter and the Half-Blood Prince', 'JK Rowling', 2005, 'Pottermore Publishing', 607, 12.99),
(2,'Silence of the Lambs', 'Thomas Harris', 1988,'St. Martins Press', 368,'17.99'),
(3,'To Kill A Mockingbird', 'Harper Lee', 1960,'J.B. Lippincott & Co.', 281,'15.99'),
(4,'Enders Game', 'John Harris', 1985,'Tor Books', 324,'10.29'),
(5,'IT', 'Stephen King', 1986,'Viking Press', 1138,23.99);

 SELECT * FROM Books;

