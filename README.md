# Project's name: Wine Saver


​

## Description


Wine Saver is an app that will make your wine experience much easier by helping you organize your favorite wines.
​

## USER STORIES (MVP)


**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

**Landing page** - As a user I want to be able to access the landing page so that I see what the app is about and login and signup

**Sign up** - As a user I want to be able to create an account to use the app and save my tasks

**Login** - As a user I want to be able to log in on the webpage 

**Logout** - As a user I want to be able to log out from the webpage

**Profile** - As a user I want to be able to see my profile and edit it

*...and change and fill with your user stories*
​

## BACKLOG


*...all the things you would like to implement that are not in the MVP*
​
​

## ROUTES




| Methods | Urls             | Actions                                  |
| ------- | ---------------- | ---------------------------------------- |
| POST    | /signup          | sign up a user with an account           |
| POST    | /login           | log in the user                          |
| GET     | /wine            | get all the wines                        |
| GET     | /wine/:id        | get wines by id                          |
| POST    | /wine            | add a new wine                           |
| PUT     | /wine/:id        | update wine by id                        |
| DELETE  | /wine/:id        | remove wine by id                        |
| GET     | /logout          | logout a user                            |



​
​

## MODELS


App model
​

```js
{
		name: String,
		type: String,
		grape: String,
		year: String,
		country: String,
		price: String,
		reviews: String,
	},
```


User model
​

```js
{
    username: String,
    email: String,
    hashedPassword: String,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'app' }]
}
```



## LINKS



### Github project

- [https://github.com/Gaston-GitHub/Project-3-started-frontend.git]
- [https://github.com/Gaston-GitHub/Project-3-started-backend.git]

### Deploy links

- [Frontend deploy]()

### Project kanban

- [Github projects]()

### Wireframes 

- [InVision with Wireframes]()

### Slides

- [Slides]()
