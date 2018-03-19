# videogame_api

## Created By: Jeffrey Miller

### What is videogame_api?
The web application - titled BrokenClock! - is a CRUD application that uses a video game API developed by a website
named Giant Bomb. With this API, users can search any video game title and receive up to a 100 results on the title they entered. From there, they can add that title to their favorites or add them to their wishlist.

### How was it built?
The application uses SANE Stack - SQL(PostgreSQL), Express, Angular, and Node. Also, Various Angular dependencies were used including -
angular-route, angular-animate, angular-sanitze, ui-select, and ui-bootstrap.

### How to use it?
Simply pick your search criteria (it defaults to game), enter your search query, and hit send! Any and all relevant results will be displayed for you. From there, you can choose to add a particular response to your favorites or wishlist.

### What's next?
Currently, there is no user authentication built into the application. In the near future, I will use Passport.js to create a registration
and login feature, which will allow for users to have a much more personal experience. Further, I plan on expanding the schema in such a manner that users can "rate" a game and that rating with be aggregated into a "community rating" and shared with user on search.  Also, comments that are defined with each rating will also be available. There is an endless amount of possibilites with the data provided by the GiantBomb API, so who knows what else may lie ahead.

### Is BrokenClock! live on the web?
It is temporarily offline while I implement proper JSONP support.
