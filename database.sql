/*1. Create Favorites Table */
CREATE TABLE favorites (
id SERIAL PRIMARY KEY,
  title varchar(120) NOT NULL,
  description varchar(250),
  release_date timestamp,
  platforms varchar ARRAY,
  game_rating varchar ARRAY,
  game_image varchar(120),
  favorite_comment varchar(500),
  site_detail_url varchar(250)
);

/*2. Create Wishlist Table */
CREATE TABLE wishlist (
id SERIAL PRIMARY KEY,
  title varchar(120) NOT NULL,
  description varchar(250),
  platforms varchar (250),
  game_image varchar(120),
  site_detail_url varchar(250)
);
