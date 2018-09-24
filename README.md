# This or That
## (Team Project)
This or That is a survey app that allows you to create fun, short polls that you can share with your friends, family, and coworkers.

Users can log in and take surveys voting for this or that! Do you like pumpkin spice lattes or apple cider? Pumpkin pie or apple pie?

## Test out the app!

To try out the app for yourself, go to the deployed url: https://onwednesdayswecode.github.io/survey-client/

Use the following demo credentials
**Username:** demo@demo
**Password:** demo

## Development Process
### Back-end
We started out by creating the Mongoose schemas for our User, Survey, and Response collections. Because users can create many surveys, we added a “surveys” field to the User schema that populates with the survey documents the user creates. The Survey schema contains a “responses” field that  populates with the response documents associated with that specific survey, as well as a “creator” field that  populates with the document associated with the user who created the survey. Finally, the Response schema contains a field called “responder” that references the user who responded, as well as a “survey” field that references the survey associated with that response.

Then we built out the routes for User, Survey, and Response to use Mongoose’s `.populate()` function in order to use document references to establish the relationship between users and surveys as well as surveys and responses. In order to use the `.populate()` function, we needed to make sure that document IDs were being pushed to the field in the document referencing the ID. Thus, survey IDs were pushed to the “surveys” field in Users, and response IDs were pushed to the “responses” field in Surveys. Once those arrays contained the ids, the populate function would insert the documents associated with those ids upon receiving a GET request from the client.

###Front-end
Our primary focus was to complete user functionality on the front-end first. Before thinking about styling, our first step was to make sure a user could complete CRUD actions and prevent crossing scripting. We started by using handlebars to display information coming from the database to prevent any malicious intent. Sticking to our MVP, we did not focus heavily on styling until a user could successfully complete all CRUD actions. At every stage, our front-end design was driven by our desire to create the best user experience. As we created elements on the page we utilized the convenience of bootstrap to style elements. After much of our project’s MVP was coming to a close, we began to explore logo options and basic styling options. We created a logo on Canva that conveyed the “pick between two” objective of the app. We used this logo for the sign in page and our favicon following the pattern of many well established companies. We gave the page basic styling based on best practices of margins to center the elements, proper spacing, and proper font size. We made the background a split color just as the logo using linear gradient in CSS. We decided that, for best user experience, displaying pie charts instead of numbers would be the optimal way to see results. We used AnyChart to create a graph. AnyChart is a lightweight JavaScript tool for creating graphs. We created a JavaScript file that integrates the information for our handlebars file to produce a graph that represents the data of the survey. This makes a great data visualization for the user. Lastly, we styled the change password card to appear similar to a modal. We had decided against using modals in this project because they are difficult to style and they do not provide a great mobile user experience. We created a nice drop down of the change password card that slides off similar to how a modal disappears for a nice user experience.

In the future, we’d like to style more elements and make sure the user experience is flawless. Now that users and use the app without bugs, the next step is to enhance the design.


### Planning Process
We embraced the scrum process methodology in order to complete This or That within the span of three days.  We started our planning with a long discussion in which we narrowed down the scope and functionality of what we were going to build.  We then set up a Trello board to use as a task manager to keep us organized and on schedule.  Each morning we would have an initial stand up meeting where team members would discuss goals for the day, and anything they were stuck on from the previous day.  At the end of each day we also had a meeting to review what was accomplished, and revisited  our to-do list in order to move any tasks around, and make a plan for the next day.  A proper git workflow was crucial to easily integrate all of our feature branches.  Whenever someone opened a pull request, there was always at least one other team member going over their code before the pull request was approved and that branch merged into our development branch.  With team members working on different aspects and in different locations, good communication was the key to our success on this project.


#### User Stories
As a user I want to be able to sign up, sign in, change my password, and sign out.
As a registered user I want to create a survey for other signed in users to take.
As a registered user I want to edit my surveys.
As a registered user I want to delete my surveys.
As a registered user I want to see all surveys that I can take.
As a registered user I want to see results from a survey after I submit a response.


#### Wireframes
[Wireframe images](https://imgur.com/a/LcjX5FT)

#### Entity Relationship Diagrams (ERD)
We decided to establish one-to-many relationships between users and surveys, as well as surveys and responses using document references. s. Users have many surveys, surveys have many responses. User can create and edit their own surveys, but any user can take surveys.
[ERD](https://imgur.com/a/m0n2aVe)

### Future Goals
There are a few ways we would like to see This or That grow in the future.  One option would be to have custom urls to share individual surveys with your friends or family.  Currently, a user can take a survey as many times as they would like, so we want to add a function to limit a user to only responding once to a survey.  The site could also be set up to have an option to view surveys one at a time, and could randomly shuffle between surveys.

A challenge we faced was with the feature to edit a survey, and what that would mean for the accuracy of the responses.  Currently, a user can update a survey and any responses from before will be included in the results.  We realize that this might not be the ideal functionality of this feature.  We discussed whether it was best to ignore all responses before the survey was updated, but decided it was better to finish the feature and discuss accuracy logistics at a later date.


## Links

* [Back-end repo](https://github.com/OnWednesdaysWeCode/survey-api)
* [Front-end repo](https://github.com/OnWednesdaysWeCode/survey-client)
* [Heroku deployment](https://serene-garden-25502.herokuapp.com/)
* [Front-end deployed](https://onwednesdayswecode.github.io/survey-client/)

## Built With

* [Express JS](https://expressjs.com/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [MongoDB](https://www.mongodb.com/) - Back-end database
* [Bootstrap/CSS/Sass](getbootstrap.com/) - Styling
* [JavaScript](https://www.javascript.com/) - Programming Language
* [Scrum](https://www.scrum.org/resources/what-is-scrum) - Workflow/ work management


## Authors

* **Abby Calish** - *Project Lead* - [Github](https://github.com/acalish)
* **Catherine Guo** - *Back-end Lead* - [Github](https://github.com/catherineguo)
* **Jennifer Fox** - *Front-end Lead* - [Github](https://github.com/jenfox4)
