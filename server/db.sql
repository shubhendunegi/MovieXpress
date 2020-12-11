--create database
CREATE DATABASE moviexpress;

--create table
CREATE TABLE movies (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    date NUMERIC(4) NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5),
    genre TEXT NOT NULL
);

--insert values to table
INSERT INTO movies ( name, date, rating, genre) values ('Toy Story', 1995, 4, 'Adventure, Animation, Children, Comedy, Fantasy');
INSERT INTO movies ( name, date, rating, genre) values ('Jumanji', 1995, 3,'Adventure, Children, Fantasy');
INSERT INTO movies ( name, date, rating, genre) values ('Grumpier Old Men', 1995, 2, 'Comedy, Romance');
INSERT INTO movies ( name, date, rating, genre) values ('Waiting to Exhale', 1995, 3, 'Comedy, Drama, Romance');
INSERT INTO movies ( name, date, rating, genre) values ('Father of the Bride Part II', 1995, 5, 'Comedy');
INSERT INTO movies ( name, date, rating, genre) values ('Heat', 1995, 5, 'Action, Crime, Thriller');
INSERT INTO movies ( name, date, rating, genre) values ('Sabrina', 1995, 3, 'Comedy, Romance');
INSERT INTO movies ( name, date, rating, genre) values ('Tom and Huck', 1995, 2, 'Adventure, Children');
INSERT INTO movies ( name, date, rating, genre) values ('Sudden Death', 1995, 4,'Action');
INSERT INTO movies ( name, date, rating, genre) values ('GoldenEye', 1995, 5, 'Action, Adventure, Thriller');
INSERT INTO movies ( name, date, rating, genre) values ('American President, The ', 1995, 4, 'Comedy, Drama, Romance');
INSERT INTO movies ( name, date, rating, genre) values ('Dracula: Dead and Loving It', 1995, 5, 'Comedy, Horror');
INSERT INTO movies ( name, date, rating, genre) values ('Balto', 1995, 3, 'Adventure, Animation, Children');
INSERT INTO movies ( name, date, rating, genre) values ('Nixon', 1995, 4, 'Drama');
INSERT INTO movies ( name, date, rating, genre) values ('Cutthroat Island', 1995, 4, 'Action, Adventure, Romance');
INSERT INTO movies ( name, date, rating, genre) values ('Casino', 1995, 5, 'Crime,Drama');
INSERT INTO movies ( name, date, rating, genre) values ('Sense and Sensibility', 1995, 5, 'Drama, Romance');
INSERT INTO movies ( name, date, rating, genre) values ('Four Rooms', 1995, 4, 'Comedy');
INSERT INTO movies ( name, date, rating, genre) values ('Ace Ventura: When Nature Calls', 1995, 5, 'Comedy');
INSERT INTO movies ( name, date, rating, genre) values ('Money Train', 1995, 5,'Action, Comedy, Crime, Drama, Thriller');


