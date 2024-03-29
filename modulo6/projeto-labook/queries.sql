-- Active: 1656975277986@@35.226.146.116@3306@gebru-4211616-mileny-faria
     CREATE TABLE labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE labook_friendships(
         user1_id VARCHAR(255) UNIQUE NOT NULL,
         user2_id VARCHAR(255) UNIQUE NOT NULL,
         FOREIGN KEY (user1_id) REFERENCES labook_users(id),
         FOREIGN KEY (user2_id) REFERENCES labook_users(id)
      );