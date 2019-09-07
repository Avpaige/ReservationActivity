DROP DATABASE IF EXISTS reservations_db;
CREATE database reservations_db;

USE reservations_db;

CREATE TABLE reserve (
  name VARCHAR(100) NOT NULL,
  phone INT(20) NOT NULL,
  email VARCHAR (50) NOT NULL,
  uniqueID INT AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (uniqueID)
);

SELECT * FROM reserve;
