EXERCICIO 1
CREATE TABLE actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

# a) VARCHAR para strings, 255 quantidade de caracteres, DATE é data, VARCHAR 6 é uma string com 6 caracteres
# b) 
SHOW DATABASES;
# mostra minha database
SHOW TABLES;
# mostra minhas tabelas criadas

# c)
DESCRIBE actor;
# descreve os tipos da tabela

#######################
EXERCICIO 2

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
	"001",
	"Tony Ramos",
    40000,
    "1948-08-25",
    "male"
);

# a)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    120000,
    "1963-08-23",
    "female"
);

# b)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Patricia Pillar",
    50000,
    "1970-09-10",
    "female"
);
# Error Code 1062. Duplicate entry "002" for key Primary - Entrada duplicada "002" para a chave primária

# c)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# Error Code 1136. Column count doesn't match value count at row 1 - A contagem de colunas não corresponde à contagem de valores na linha 1
# Faltou a coluna birth_date e gender

# d)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Osmar Prado",
  400000,
  "1949-04-18", 
  "male"
);
# Error Code 1364. Field name doesn't have a default value - O nome do campo não tem um valor padrão
# Nao foi passado valor pra coluna nome, e ela é um not null, precisa passar

# e)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
# Error Code 1292. Incorrect date value. 1950 for column birth_date at row 1 - Valor de data incorreto. 1950 para a coluna birth_date na linha 1
# Date precisa passar com aspas

# f)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Patricia Pillar",
  719333.33,
  "1979-03-26", 
  "female"
);

#######################
EXERCICIO 3

SELECT * FROM actor;
SELECT id, salary FROM actor;
SELECT id, name FROM actor WHERE gender = "male";

# a)
SELECT id, name, salary, birth_date, gender FROM actor WHERE gender = "female";

# b)
SELECT salary FROM actor WHERE name = "Tony Ramos";

# c)
SELECT id, name, salary, birth_date, gender FROM actor WHERE gender = "invalid";
# retornou NULL pois nao há gender invalid

# d)
SELECT id, name, salary FROM actor WHERE salary <= 500000;

# e)
SELECT id, name from actor WHERE id = "002";
# Error Code 1054. Unknown column nome in field list - Nao existe o nome na coluna

#######################
EXERCICIO 4

#######################
EXERCICIO 5

SELECT name FROM actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

# b)
SELECT name FROM actor WHERE name NOT LIKE "A%" AND salary > 350000;

# c)
SELECT * FROM actor WHERE name LIKE "%g%" OR name LIKE "%G%";

# d)
SELECT * FROM actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%g%")
AND salary BETWEEN 350000 AND 900000;

#######################
EXERCICIO 6

# a)
CREATE TABLE movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date_of DATE NOT NULL,
    evaluation TINYINT(10) NOT NULL
); 

# b)
INSERT INTO movies
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
INSERT INTO movies
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
), (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
), (
	"004",
    "Cidade de Deus",
    "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
    "2002-08-30",
    10
);

#######################
EXERCICIO 7

# a)
SELECT id, name, evaluation FROM movies WHERE id = "003";

# b)
SELECT * FROM movies WHERE name = "Cidade de Deus";

# c) 
SELECT id, name, synopsis FROM movies WHERE evaluation >= 7;

# 8)
# a)
SELECT * FROM movies WHERE name LIKE "%vida%";

# b)
SELECT * FROM movies WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";

# c)
SELECT * FROM movies WHERE release_date_of < "2022-06-14";

# d)
SELECT * FROM movies WHERE release_date_of < CURDATE() AND name LIKE "%flor%" AND evaluation > 7;