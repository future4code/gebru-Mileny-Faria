SHOW TABLES;
DESCRIBE actor;
SELECT * FROM actor;
DESCRIBE movies;

SET SQL_SAFE_UPDATES = 0;

# Exercicio 1
ALTER TABLE actor
ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE actor
ADD type VARCHAR(255) DEFAULT "NotDirector";

# a) ALTER TABLE Actor DROP COLUMN salary; ALTERA A TABELA ACTOR DROPANDO A COLUNA SALARY

# b) ALTER TABLE Actor MODIFY gender VARCHAR(6); ALTERA A TABELA ACTOR MODIFICANDO O GENDER PARA UM TIPO VARCHAR(6)

# c) 
ALTER TABLE actor
MODIFY gender VARCHAR(100);


# Exercicio 2
UPDATE actor
SET name = "Moacyr Franco"
WHERE id = "001";

# a) 
UPDATE actor
SET name = "Leonardo di Caprio", birth_date = "1981-05-02"
WHERE id = "003";

# b)
UPDATE actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE actor
SET name = "Juliana Paes"
WHERE id = "005";

# c)
UPDATE actor
SET name = "Brad Pitt", salary = 50000, birth_date = "1978-01-20", gender = "male", favorite_ice_cream_flavor = "Chocolate", type = "Director"
WHERE id = "005";

# d)
UPDATE actor
SET name = "Julia Roberts"
WHERE id = "123"; #eu  estou alterando um ID q nao existe e está dando ok. Esse é um comportamento do próprio comando mesmo. Ele vai dar funcionando só que ele não vai editar nada porque o id não existe!


# Exercicio 3
DELETE FROM actor
WHERE name = "Patricia Pillar";

# a)
DELETE FROM actor
WHERE name = "Osmar Prado";

# b)
DELETE FROM actor
WHERE gender = "male" AND salary > 1000000;


# Exercicio 4
SELECT COUNT(*) FROM actor
WHERE gender = "female";

SELECT AVG(salary) FROM actor;

# a)
SELECT MAX(salary) FROM actor;

# b)
SELECT MIN(salary) FROM actor
WHERE gender = "female";

# c)
SELECT COUNT(*) FROM actor
WHERE gender = "female";

# d)
SELECT SUM(salary) FROM actor;


# Exercicios 5
SELECT * FROM actor
LIMIT 3;

SELECT * FROM actor
ORDER BY name ASC;

SELECT * FROM actor
ORDER BY name ASC
LIMIT 4;

SELECT * FROM actor 
WHERE gender = "female"
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM actor
GROUP BY gender;

# a) Contou na tabela quantos atores e atrizes existem separados por gender

# b)
SELECT id, name FROM actor
ORDER BY name DESC;

# c)
SELECT * FROM actor
ORDER BY salary ASC;

# d)
SELECT * FROM actor
ORDER BY salary DESC
LIMIT 3;

# e)
SELECT AVG(salary), gender FROM actor
GROUP BY gender;


# Exercicio 6
SELECT * FROM movies;
DESCRIBE movies;

UPDATE movies
SET playing_limit_date = "2022-10-01"
WHERE id = "003";


# a)
ALTER TABLE movies
ADD playing_limit_date DATE;

# b)
ALTER TABLE movies
MODIFY evaluation FLOAT;

# c)
UPDATE movies
SET playing_limit_date = "2022-07-10"
WHERE name = "Se Eu Fosse Você";

UPDATE movies
SET playing_limit_date = "2022-05-03"
WHERE name = "Doce de mãe";

# d)
DELETE FROM movies
WHERE name = "Cidade de Deus";

UPDATE movies
SET synopsis = "Eu deletei esse filme"
WHERE id = "004";
# Ele dá funcionando mas nao edita nada pq o id nao existe


# Exercicio 7
# a)
SELECT COUNT(*) FROM movies
WHERE evaluation > 7.5;

# b)
SELECT AVG(evaluation) FROM movies;

# c)
SELECT COUNT(*) FROM movies;

# d)
SELECT COUNT(*) FROM movies
WHERE release_date_of > CURDATE();

# e)
SELECT MAX(evaluation) FROM movies;

# f)
SELECT MIN(evaluation) FROM movies;


# Exercicio 8
# a)
SELECT * FROM movies
ORDER BY name ASC;

# b)
SELECT * FROM movies
ORDER BY name DESC
LIMIT 5;

# c)
SELECT * FROM movies
WHERE playing_limit_date > CURDATE()
LIMIT 3;

# d)
SELECT * FROM movies
ORDER BY evaluation DESC
LIMIT 3;