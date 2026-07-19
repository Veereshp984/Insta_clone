# Insta Clone Project

A full-stack Instagram-style project with user authentication, post creation, feed rendering, and like/unlike functionality.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Sass
- React Icons

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- Cookie-based auth
- Multer for image upload
- ImageKit for image storage

## Project Structure

```txt
Project/
  backend/
    server.js
    src/
      app.js
      config/
      controllers/
      middlewares/
      models/
      routes/

  frontend/
    src/
      App.jsx
      AppRoutes.jsx
      features/
        auth/
        post/
        shared/
```

## Features

- Register user
- Login user
- Authenticated feed
- Create post with image and caption
- Display posts with user details
- Like posts
- Unlike posts
- Check whether the logged-in user liked a post

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:3000
```

## Frontend Setup

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

## Routes

### Frontend Routes

```txt
/             Feed page
/login        Login page
/register     Register page
/create-post  Create post page
```

### Backend Routes

#### Auth

```txt
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/get-me
```

#### Posts

```txt
GET  /api/posts/feed
POST /api/posts
GET  /api/posts
GET  /api/posts/details/:postId
POST /api/posts/like/:postId
POST /api/posts/unlike/:postId
```

## Important Notes

- The frontend uses cookies, so backend CORS must allow credentials.
- The backend currently allows requests from:

```txt
http://localhost:5173
```

- Post creation requires a logged-in user.
- Feed, like, unlike, and create post routes are protected by JWT cookie authentication.
- Profile images should be stored as public URLs, not local file paths, because browsers cannot load local backend file paths directly.

## Common Issues

### Feed Stuck on Loading

This usually means the feed API failed and loading was not reset, or the user is not logged in.

### Cannot Read Username/Profile Image

This usually means `post.user` is `null` or missing. Make sure posts are populated with user data in the backend.

### Image Not Loading

If the image URL starts with `C:\Users\...`, the browser will block it. Use a public URL or serve the image statically from Express.

## Author

Created as part of the Sheryians Backend Cohort project.
