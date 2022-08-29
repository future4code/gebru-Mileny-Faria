-- Active: 1656975277986@@35.226.146.116@3306@gebru-4211616-mileny-faria
     CREATE TABLE IF NOT EXISTS cookenu_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS cookenu_recipes(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        preparation_mode TEXT NOT NULL,
        creation_date DATE NOT NULL
      );

        CREATE TABLE IF NOT EXISTS cookenu_friendships(
        id VARCHAR(255) PRIMARY KEY,
        friend_id VARCHAR(255) UNIQUE NOT NULL,
        FOREIGN KEY (friend_id) REFERENCES cookenu_users(id)
      )