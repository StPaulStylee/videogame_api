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

/*2. Add new columns to favorites table */
ALTER TABLE favorites
ADD favorite_comment varchar(500);
ADD site_detail_url(250);
/*3. Create Wishlist Table */
CREATE TABLE wishlist (
id SERIAL PRIMARY KEY,
  title varchar(120) NOT NULL,
  description varchar(250),
  platforms varchar (250)
);

/*4. Add new columns to wishlist table */
ALTER TABLE wishlist
ADD game_image varchar(120)
ADD site_detail_url(250);
