
## Description

The MovieFlix API is a RESTful web service built with NestJS and MongoDB to manage movies and genres. It provides endpoints for listing, adding, updating, and deleting movies, as well as managing genres and searching for movies.

##   ❗❗Important❗❗

Create a .env file in the project root directory and configure to live MongoDB connection string: 

```bash
DB_URI=mongodb+srv://admin:<password>@movieflix.vnutawb.mongodb.net/
```
PS: Please request for password if it I havent sent you through email

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# production mode
$ yarn run start:prod
```


# MovieFlix API Documentation

Welcome to the MovieFlix API documentation. This document provides details about the available endpoints, their descriptions, request/response formats, and example usage.

## Base URL

The base URL for the MovieFlix API is `http://localhost:3000` (Replace with your actual API base URL).

## Authentication

Authentication is not required for these endpoints.

---
## 🔌🔌Endpoints🔌🔌
---

### List Movies

- **Endpoint**: `GET /movies`
- **Description**: Retrieves a list of all movies in the database.

#### Request
GET /movies

#### Response

- **Status Code**: 200 OK
- **Response Body**: List of movies in JSON format.





### Add Movie

- **Endpoint**: `POST /movies`
- **Description**: Adds a new movie to the database.

#### Request
POST /movies
Content-Type: application/json

{
"title": "Movie Title",
"description": "Movie Description",
"releaseDate": "YYYY-MM-DD",
"genre": ["Genre1", "Genre2"]
}

#### Response

- **Status Code**: 201 Created
- **Response Body**: The newly added movie in JSON format.





### Update Movie

- **Endpoint**: `PUT /movies/:id`
- **Description**: Updates the details of a specific movie.

#### Request
PUT /movies/:id
Content-Type: application/json

{
"description": "Updated movie description."
}

#### Response

- **Status Code**: 200 OK
- **Response Body**: The updated movie in JSON format.






### Delete Movie

- **Endpoint**: `DELETE /movies/:id`
- **Description**: Deletes a specific movie from the database.

#### Request
DELETE /movies/:id

#### Response

- **Status Code**: 204 No Content
- No response body.






### List Genres

- **Endpoint**: `GET /genres`
- **Description**: Retrieves a list of all genres in the database.

#### Request
GET /genres

#### Response

- **Status Code**: 200 OK
- **Response Body**: List of genres in JSON format.






### Add Genre

- **Endpoint**: `POST /genres`
- **Description**: Adds a new genre to the database.

#### Request
POST /genres
Content-Type: application/json

{
"name": "Genre Name"
}


#### Response

- **Status Code**: 201 Created
- **Response Body**: The newly added genre in JSON format.






### Delete Genre

- **Endpoint**: `DELETE /genres/:id`
- **Description**: Deletes a specific genre from the database.

#### Request
DELETE /genres/:id

#### Response

- **Status Code**: 204 No Content
- No response body.






### Search Movies

- **Endpoint**: `GET /movies/search`
- **Description**: Searches for movies by title and/or genre.

#### Request
GET /movies/search?title=MovieTitle&genre=GenreName

#### Response

- **Status Code**: 200 OK
- **Response Body**: List of movies that match the search criteria in JSON format.




## License

Nest is [MIT licensed](LICENSE).
