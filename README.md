## Getting started

### 1. Install dependencies

```

Install dependencies:

```
npm install
or
yarn
```

### 2. Start the REST API server

```
npm run dev
or
yarn dev
```

The server is now running on `http://localhost:5000`. You can now the API requests.

## Using the REST API

You can access the REST API of the server using the following endpoints:

### `GET`

- `/users/:id`: Fetch a single post by its `id`
- `/users/:id`: Fetch all users

### `POST`

- `/signup`: Create a new user
  - Body:
    - `name: String` (optional)
    - `surname: String` (optional)
    - `email: String` (required)
    - `password: String` (optional)
- `/signin`
  - Body:
    - `email: String` (required)
    - `password: String` (required)

### `PUT`

- `/users/:id`: Update user by its `id` (Authenticated)
  - Body:
    - `name: String` 
    - `surname: String` 


### `DELETE`

- `/users/:id`: Delete user by its `id` (Authenticated)


