# ORCA Card Reloaded

Live site: https://orca-card-reloaded.herokuapp.com/

![orca-card-mobile](/client/src/orca-card-mobile.png/?raw=true)

### Description

** The Challenge **

ORCA Card Reloaded seeks to solve some of the usability problems with the web interface for ORCA, the transit card shared by half a dozen Seattle-area agencies. Thousands rely on ORCA for bus, train, and ferry travel, but its current website hasn't been significantly updated since 2008. Right now, it's difficult and cumbersome to complete common tasks like adding a monthly bus pass to your card, and the site—which was created in the early days of the smartphone boom—isn't responsive at all.

** Our Goals ** 
We aimed to build a new front end for ORCA with modern web technologies—most importantly, React. It would have to be fast and responsive, with big, bright buttons that would be easy to press while reloading your card on the go. It would also have to be mobile-first. We wanted to meet ORCA riders where they are: trying to add money to their cards while rushing to catch a bus or boat.

ORCA stands for "One Regional Card for All," so we also wanted the site to be accessible to as many riders as possible. We made our touch targets big and friendly and chose a color palette that wouldn't interfere with colorblind passengers. We also got around some of the limitations of React's single-page app structure by adding page titles and tags with React-Helmet—this is especially important for ORCA riders who rely on screen readers.

We also provided a back end using Node, Express, and PostgreSQL, to demonstrate how our site might be hooked up with existing ORCA card data.

### Project Structure

#### This web application was developed with:
* React
* Redux
* HTML5/CSS3
* SASS/SCSS
* Node.js
* Express
* Sequelize
* PostgreSQL
* React-Helmet
* React-Notifications
* React Mapbox GL
* Material UI


#### Back End Routes:

| Method | Path | Action |
| ------ |------| -------|
| GET | '/' | index - homepage of site |
| POST | '/auth/login' | log in user |
| POST | '/auth/signup' | creates new user |
| GET | '/auth/me/from/token' | verifies token |
| POST | '/card/addvalue' | updates balance on a card |
| POST | '/card/auto_reload' | updates auto-reload amount |
| POST | '/card/addpass' | adds/updates pass on card |
| POST | '/user/cards' | sends user's cards info to the front |
| POST | '/user/edit' | edits a user's profile information |

#### Database Models:

| Model | Schema | Relationship(s) |
| ----- |--------| ----------------|
| User | first, last, username, email, dob, street, city, state, zip, question, answer, password | has many Cards |
| Card | cvv, nickname, balance, pass, auto_reload, passenger_type, isactive, userId | has Activity |
| Activity | cardId, route, amount | belongs to Card |

### Wireframing

Preliminary sketches were made in Adobe XD to plan out the flow of the site.

![wireframes](/client/src/orca-wireframes.png?raw=true)

### Project Tracking

We managed progress and sprints with this [Trello Board](https://trello.com/b/D28aKHPJ/orca-card)

### Challenges:

#### Redux Store
Redux, the popular state-management library, was fairly new to us, but it became essential to managing the flow of data as users navigate the site. Setting up Redux took extra work up front, but it ultimately made our site more scalable and made it easier to add additional features.

#### Managing Scope
Although the current ORCA site seems simple, it provides a tremendous amount of information—a lot of it for specific groups of passengers. Given the  one-week time frame of our project, we decided to focus on the 80% of passengers who probably use 20% of the site's features. Common activities like signing up, loading a card, and adding bus passes were top of mind. 

Unfortunately, that means we weren't able to tackle things like special pass categories for children or low-income riders, or King County Metro's VanPool service and Access shuttles. Instead, we tried to build a solid, clean, and stable framework that can accomodate features like these in the future.  

### Front End Styling

![responsive-site-image](/client/src/orca-responsive.png/?raw=true)

While we did use the Material-UI for some aspects of our site styling (notably for form elements), we  didn't want ORCA Card Reloaded to be "just another Material Design site," so most of the styling was done by hand using CSS and Sass. 

The bright color palette is meant to be friendly and accessible, but it's also our acknowledgement that so many Seattle-area websites stick to shades of green and blue, borrowing from the branding of the Mariners, Seahawks, and Sounders. We wanted ORCA Card Reloaded to stand out, and we especially wanted "Get a Pass" and "Go To My Pass" buttons that users just couldn't miss. Hello, orange and yellow accent colors!

### Result and Next Steps

Future items we'd like to implement are:

* Adding service pages for every ORCA customer, not just the majority of riders.
* Refining our styling, preferably based on user testing.
* Pulling passenger activity from a database instead of displaying dummy data. We obviously don't have access to transit agencies' passenger records, but we'd like to show what it would look  like if we did.
* And we can't consider ORCA Card Reloaded complete until it has an adorable Orca mascot on the front page. We've been calling him Nunito, after one of the fonts we used on the project.

** Acknowledgements 
* Seattle skyline background via Vecteezy — remixed by us.
* Dan Abramov's labyrinth of a brain for Redux
* Nick Finck and his UX students for design inspiration
* Portland, Oregon's Hop Card for being what ORCA could become in the future
