# Blood Pressure Tracker   [image](/public/HeartDiagram.jpg)

This application is a handy little utility for those people with high blood pressure and anyone else interested in keeping records of their blood pressure. It allows a user to enter their blood pressure readings: Systolic, Diastolic and Pulse and the system will store the information to a secure server with a timestamp to record when the reading was entered.

### Technologies
Blood Pressure Tracker is a "SPA" (single page application) using hide and show techniques to keep the interface simple and intuitive while reducing network traffic and server delay. Based on a "Client - Server" architecture the app was developed using Javascript and includes Bootstrap, Node, Express, HTML, CSS, jQuery and uses Ajax to manage the HTTP communications between client and server. The server is hosted on Heroku.com and the client repository is on Github.com.

### Features
A user must first signup for an account and must login to be provided access. Once logged in the user can record readings, view a history of readings. Delete a record and update records. The client software can be accessed and run on any computer or smart phone with a modern web browser like Chrome or Safari.

### Planning
The planning process began with wireframe sketches and user stories. The user stories were valuable in that they bring to the surface features and interfaces that were not thought of initially. Links to these resources are below.

The development was done on a local Express / Node server with the client running on the same computer using grunt as the html server. The server and API was the first part that was developed then I tested the API using Curl scripts from a terminal window. Next the Client development started with basic Authentication then the features of storing, retreiving and updating data on the server.

### User stories
As a user I should be able to sign up using email and password

As a user I should be able to sign in

As a user I should be able to change my password once Iam signed in.

As a signed in user I should be able to sign out.

As a signed in user I should be able to enter my BP readings

As a signed in user I should be able to see a history of my BP readings

As a signed in user I should be able to search for a BP reading

As a signed in user I should be able to update a previous reading

As a signed in user I should be able to delete a reading.

[Wireframes](/puplic/WireDiagrams.pdf)

[Server Repo](https://github.com/xpertimage/bp_tracker)
