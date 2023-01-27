# booking-app
Booking app for football courts indoor and outdoors. 

# Description 

this application allows customers to book an indoor soccer court. The user must create an account to be able to book courts. 

At the moment, users are able to create accounts but the user cannot be connected to specific bookings. This will be fixed by creating a database connection via React instead of PHP. 

Another issue at the moment is that single football venues cannot be displayed dynamically. The workaround at the moment is to redirect users to a hard-coded page that displays more info about the chosen football venue.

The logic for restricted routes is yet to be applied. Once I can start a session via React, I will be able to manage session users. 

# Installation and running locally

Wamp server must be installed on your device in order to view/create databases and run localhost:8000. 
React and its dependencies must also be installed. 

To start the project, change directory to booking-app/front-end/ and run NPM start.

The project runs from localhost:3000 but sends its databases request to the backend to localhost:8000. 

The React portion of the project is found under booking-app/front-end/

booking-app/front-end/src/pages is where my REACT pages are found

The PHP portion of the project is found under booking-app. 

Databases for both users and products must be created. The database is found under booking-app\Database.






