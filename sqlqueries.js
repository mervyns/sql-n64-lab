// Select the title of all games
SELECT title FROM Games;
// Show all the years in the database.
SELECT year FROM Games;
// Show the title of each game made by 'Rare'.
SELECT * FROM Games WHERE developers = 'Rare';
// Select all games that were made before 1998.
SELECT * FROM Games WHERE year < 1998;
// Find the average release year of all games.
SELECT AVG(year) FROM Games;
// Show the developer names of each game, in alphabetical order.
SELECT title, developers FROM Games ORDER BY developers ASC;
// Show the titles of games not made by 'Nintendo EAD'.
SELECT title FROM Games WHERE developers != 'Nintendo EAD';
// Add the the game 'F-Zero X', released in 1998, made by 'Nintendo EAD', and with the genre 'Racing'.
INSERT INTO Games (title, year, developers, genre) VALUES ('F-Zero X', '1998', 'Nintendo EAD', 'Racing');
// Show all the game titles in descending order of their release year.
SELECT title, year FROM Games ORDER BY year DESC;
// Remove all games not made by 'Hudson Soft'.
DELETE FROM Games WHERE developers != 'Hudson Soft';
// Show the average release year for games that were made by Rare or have the title Tony Hawk''s Pro Skater
SELECT AVG(year) FROM Games WHERE developers = 'Rare' OR title='Tony Hawk''s Pro Skater';
// Show the id and title and genre of all games that were either:
    // Made before 1997,
    // Made by Hal Laboratory,
    // Or, have the genre Platforming AND are made by Rare.
SELECT id, title, genre FROM Games WHERE year < 1997 OR developers = 'Hal Laboratory' OR genre = 'Platforming' AND developers='Rare';
