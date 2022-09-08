-- Active: 1656975277986@@35.226.146.116@3306@gebru-4211616-mileny-faria
CREATE TABLE IF NOT EXISTS users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         role ENUM('ADMIN', 'NORMAL') DEFAULT 'NORMAL'
      );