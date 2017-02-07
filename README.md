# videogame_api

##Created By: Jeffrey Miller

###What is videogame_api?
The web application - which is actually titled BrokenClock! - is a CRUD application that uses a video game API developed by a website
named Giant Bomb. With this API, users can search any video game title and receive up to a 30 results on the title they entered. From their, they can add that title to their favorites or add them to their wishlist.  FYI, when making a query, the API can be a bit sluggish, but I promise you, your results will appear if you just hang in their a few seconds!

###How was it built?
The application uses SANE Stack - SQL(PostgreSQL), Express, Angular, and Node. Also, Various Angular dependencies were used including -
angular-route, angular-animate, angular-sanitze, ui-select, and ui-bootstrap.

###How to use it?
If you are not receiving any results upon a search, it is likely you are coming across a CORS issue. To resolve, you may
need to download a plugin on your brower that allows for Cross Origin Requests. Simply search "CORS Plugin" for the browser
of your choice and you will find may options that will resolve the issue.

### What's next?
Currently, there is no user authentication built into the application. In the near future, I will use Passport.js to create a registration 
and login feature, which will allow for users to have a much more personal experience. Also, I will expand upon the searches capabilities
by allowing users to search in different categories, which will undoubtabley, give them wider results.

### Is BrokenClock! live on the web?
Currently that application is running on Heroku, but the features that use a database are not currently functioning. I am in the midst of getting a PostgreSQL DB set up, so please check back soon.
