# ORCA Card Reloaded

Live site: https://

![app](/img/?raw=true)

### Description


### Project Structure

#### This web application was developed with:
* React
* Redux
* Node.js
* Express
* Sequelize
* Postgres
* Helmet
* React Mapbox GL
* Material UI
* HTML
* SASS/SCSS

#### Back End Routes:

| Method | Path | Action |
| ------ |------| -------|
| GET | '/' | index - homepage of site |
| GET | '/auth/login' | returns new form to login |
| POST | '/auth/login' | log in user |
| GET | '/auth/signup' | returns new form to sign up |
| POST | '/auth/signup' | creates new user |
| GET | '/auth/logout' | log out user |


#### Database Models:

| Model | Schema | Relationship(s) |
| ----- |--------| ----------------|
| User |  | has many Cards |
| Card |  | has Activity |
| Activity |  | belongs to Card |

### User Stories



### Wireframing

Preliminary sketches were made in Adobe XD to plan out the flow of the site.

![wireframes](/img/orca-wireframes.png?raw=true)

### Project Tracking

We managed progress and sprints with this [Trello Board](https://trello.com/b/D28aKHPJ/orca-card)

### Challenges:
#### Redux Store

#### Managing Scope

### Front End Styling

![responsive-site-image](/img/?raw=true)



### Result and Next Steps

Future items we'd like to implement are:

*
*
*
*
*
*




