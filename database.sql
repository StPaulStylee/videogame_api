/*1. Create Favorites Table */
CREATE TABLE favorites (
id SERIAL PRIMARY KEY,
  title varchar(120) NOT NULL,
  description varchar(250),
  release_date timestamp,
  platforms varchar ARRAY,
  game_rating varchar ARRAY,
  game_image varchar(120)
);
